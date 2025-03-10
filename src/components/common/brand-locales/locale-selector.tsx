"use client";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { request } from "@/configs/fetch";
import { setLocale } from "@/lib/locale.util";
import { usePathname, useRouter } from "next/navigation";
import { use, useState } from "react";

const localesPromise = request<Locale[]>("i18n/locales", {
	cache: "force-cache",
});

export function LocaleSelector() {
	const { data: locales } = use(localesPromise);
	const router = useRouter();
	const pathname = usePathname();

	const [currentLocale, setCurrentLocale] = useState(pathname.split("/")[1]);

	return (
		<Select
			value={currentLocale}
			onValueChange={async (locale) => {
				const url = `/${locale}/${pathname.slice(4)}`;
				setCurrentLocale(locale);
				await setLocale(locale);
				router.push(url);
			}}
		>
			<SelectTrigger className="min-w-[8rem]">
				<SelectValue placeholder="Locale" />
			</SelectTrigger>
			<SelectContent>
				{locales?.map((locale) => (
					<SelectItem key={locale.documentId} value={locale.code}>
						{locale.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
