import Blocks from "@/components/blocks";
import { request } from "@/configs/fetch";
import qs from "qs";

export default async function CatchAllPages({
	params,
}: Readonly<{
	params: Promise<{ locale: string; segments: string[] }>;
}>) {
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
		},
	);
	const url = `${segments.join("/")}${query}`;

	const { data, error } = await request<{ data: DynamicZone }>(url);

	if (error) {
		throw new Error(error.message);
	}

	const { layouts } = data?.data ?? {};
	return <div>{layouts && <Blocks blocks={layouts} />}</div>;
}
