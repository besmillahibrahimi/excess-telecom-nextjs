import dynamic from "next/dynamic";

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="flex flex-col space-y-8">
      {blocks.map((block) => {
        switch (block.__component) {
          case "common.hero": {
            const Com = dynamic(() => import("./hero"));
            return <Com key={block.id} {...(block as unknown as Hero)} />;
          }
          default:
            return "Block Not supported yet";
        }
      })}
    </div>
  );
}
