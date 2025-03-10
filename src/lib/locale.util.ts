"use server";
import { serverEnv } from "@/configs/env/server";
import { cookies } from "next/headers";

export async function setLocale(locale: string) {
	const store = await cookies();
	store.set(serverEnv.app.localeCookieName, locale, { path: "/" });
}

export async function getLocale(locales: string[]) {
	const store = await cookies();

	const preLocale = store.get(serverEnv.app.localeCookieName)?.value;
	if (!preLocale) {
		await setLocale(locales[0]);
		return locales[0];
	}
	const locale = locales.includes(preLocale) ? preLocale : locales[0];
	return locale;
}
