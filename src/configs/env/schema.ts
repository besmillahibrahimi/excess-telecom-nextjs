import { z } from "zod";

export const clientSchema = z.object({
	app: z.object({
		name: z.string(),
		localeCookieName: z.string(),
		version: z.string(),
		build: z.string(),
		env: z.string(),
		address: z.string(),
	}),

	strapi: z.object({
		url: z.string(),
		version: z.string(),
	}),
});

export const serverSchema = z.object({
	app: z.object({
		name: z.string(),
		localeCookieName: z.string(),
		version: z.string(),
		build: z.string(),
		env: z.string(),
		address: z.string(),
	}),

	strapi: z.object({
		url: z.string(),
		version: z.string(),
	}),
});
