import { serverSchema } from "./schema";

export const serverEnv = serverSchema.parse({
	app: {
		name: process.env.NEXT_PUBLIC_APP_NAME,
		localeCookieName:
			process.env.NEXT_PUBLIC_LOCALE_COOKIE_NAME ?? "NEXT_LOCALE",
		version: process.env.NEXT_PUBLIC_APP_VERSION,
		build: process.env.NEXT_PUBLIC_BUILD,
		env: process.env.NEXT_PUBLIC_NODE_ENV,
		address: process.env.NEXT_PUBLIC_SITE_ADDRESS,
	},
	strapi: {
		url: process.env.NEXT_PUBLIC_STRAPI_URL,
		version: process.env.NEXT_PUBLIC_APP_VERSION,
	},
});
