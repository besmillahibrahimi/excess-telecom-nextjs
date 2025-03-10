import Image from "next/image";
import { Suspense } from "react";
import Skeleton from "../skeleton";
import { LocaleSelector } from "./locale-selector";

export default function BrandLocale() {
	return (
		<div className="container mx-auto w-full flex justify-between p-5">
			<div>
				<Image
					className="max-h-8 w-auto"
					src={"/logos/1w-ex-dark.webp"}
					alt="1wireless excess"
					width={775}
					height={119}
				/>
			</div>
			<div>
				<Suspense fallback={<Skeleton />}>
					<LocaleSelector />
				</Suspense>
			</div>
		</div>
	);
}
