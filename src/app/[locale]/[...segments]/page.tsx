import Blocks from "@/components/blocks";
import { request } from "@/configs/fetch";
import { determineLPVariant } from "@/lib/platform-detection.util";
import { headers } from "next/headers";
import qs from "qs";

export default async function CatchAllPages({
  params,
  searchParams,
}: Readonly<{
  searchParams: Promise<{ version?: string }>;
  params: Promise<{
    locale: string;
    segments: string[];
  }>;
}>) {
  const { version } = await searchParams;
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? "";
  const platform = determineLPVariant(host, version ?? "");
  const { locale, segments = ["home-page"] } = await params;
  const query = qs.stringify(
    {
      populate: {
        layouts: {
          on: {
            "common.hero": {
              populate: "*",
            },
            "common.content": {
              populate: "*",
            },
            "common.grid": {
              populate: "*",
            },
          },
        },
      },
      locale,
    },
    {
      encodeValuesOnly: true,
      addQueryPrefix: true,
    }
  );
  const url = `${segments.join("/")}${query}`;

  const { data } = await request<{ data: DynamicZone }>(url);

  const { layouts } = data?.data ?? {};
  return (
    <div>{layouts && <Blocks platform={platform} blocks={layouts} />}</div>
  );
}
