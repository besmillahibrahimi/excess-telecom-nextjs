import { cn } from "@/lib/utils";

export default function Skeleton({
	className,
}: Readonly<{ className?: string }>) {
	return (
		<div
			className={cn(
				"min-h-9 min-w-[8rem] rounded-lg animate-pulse bg-gray-200",
				className,
			)}
		/>
	);
}
