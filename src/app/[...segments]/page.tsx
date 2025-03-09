import Blocks from "@/components/blocks";
import { request } from "@/configs/fetch";

export default async function CatchAllPages({
  params,
}: {
  params: Promise<{ segments: string[] }>;
}) {
  const { segments = ["home-page"] } = await params;

  const { data } = await request<{ data: DynamicZone }>(
    `${segments.join("/")}/?populate[layouts][on][common.hero][populate]=*`
  );
  return (
    <div>{data?.data?.layouts && <Blocks blocks={data?.data.layouts} />}</div>
  );
}
