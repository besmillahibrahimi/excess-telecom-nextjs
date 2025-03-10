"use server";
import { serverEnv } from "@/configs/env/server";
import { cookies } from "next/headers";

export async function setLocale(locale: string) {
  const store = await cookies();
  store.set(serverEnv.app.localeCookieName, locale, { path: "/" });
}

export async function getLocale(locales: string[], defLocale = "en") {
  const store = await cookies();

  const preLocale = store.get(serverEnv.app.localeCookieName)?.value;
  if (!preLocale) {
    await setLocale(defLocale ?? locales[0]);
    return locales[0];
  }
  const locale = locales.includes(preLocale)
    ? preLocale
    : defLocale ?? locales[0];
  return locale;
}
