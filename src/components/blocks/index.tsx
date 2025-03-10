import { useMemo } from "react";
import { blockComponents } from "./blocks.config";

export default function Blocks({ blocks }: Readonly<{ blocks: Block[] }>) {
	const coms = useMemo(
		() =>
			blocks.map((block) => {
				const Com = blockComponents[block.__component];
				if (!Com) {
					return <div key={block.id}>Block not found</div>;
				}
				return <Com key={block.id} {...block} />;
			}),
		[blocks],
	);
	return <div className="flex flex-col space-y-8">{coms}</div>;
}
