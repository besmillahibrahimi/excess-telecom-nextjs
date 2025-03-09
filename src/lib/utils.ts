import { serverEnv } from "@/configs/env/server";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function mediaUrl(url: string) {
  if (url.includes("://")) return url;

  return `${serverEnv.strapi.url}${url}`;
}
