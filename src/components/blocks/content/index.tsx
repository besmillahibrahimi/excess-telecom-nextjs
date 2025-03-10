import { cn } from "@/lib/utils";

export default function ContentBlock(props: ContentDoc) {
	return (
		<div className="container mx-auto">
			<div
				style={{
					width: `var(--w-{{${props.width.replace("w-", "")}}})`,
					border: props.border,
					background: props.background,
					padding: props.padding,
					margin: props.margin,
				}}
				className={cn({
					"border p-4 rounded-lg shadow drop-shadow-md": props.asCard,
					"border rounded": props.border,
				})}
			>
				{/* biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation> */}
				<div dangerouslySetInnerHTML={{ __html: props.content }} />
			</div>
		</div>
	);
}
