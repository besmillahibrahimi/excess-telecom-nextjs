import { useMemo } from "react";
import { blockComponents } from "./blocks.config";

export default function Blocks({
  blocks,
  platform,
}: Readonly<{ blocks: Block[]; platform?: PlatformNames }>) {
  const coms = useMemo(
    () =>
      blocks.map((block) => {
        if (block.platform && platform) {
          if (Array.isArray(block.platform)) {
            const p = block.platform.some((p) => p.name === platform);

            if (!p) return null;
          } else if (block.platform.name !== platform) return null;
        }

        const Com = blockComponents[block.__component];
        if (!Com) {
          return <div key={block.id}>Block not found</div>;
        }
        return <Com key={`${block.id}-${block.__component}`} {...block} />;
      }),
    [blocks]
  );
  return <div className="flex flex-col space-y-8">{coms}</div>;
}
