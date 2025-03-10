import { serverEnv } from "../env/server";

type ResponseType<T> = {
	data?: T | null;
	error?: {
		status: number;
		statusText: string;
		message?: string;
		error?: {
			status: number;
			name: string;
			message: string;
			details: Record<string, string>;
		} | null;
	} | null;
};

type RequestOptions = RequestInit & {
	timeout?: number;
	retries?: number;
};

export async function request<T>(
	path: string,
	options: RequestOptions = {},
): Promise<ResponseType<T>> {
	const { timeout = 60000, retries = 1, ...fetchOptions } = options;

	const url = `${serverEnv.strapi.url}/api/${path}`;
	const headers = {
		"Content-Type": "application/json",
		...(fetchOptions.headers || {}),
	};

	if (fetchOptions.body && typeof fetchOptions.body !== "string") {
		fetchOptions.body = JSON.stringify(fetchOptions.body);
	}

	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), timeout);

			const response = await fetch(url, {
				...fetchOptions,
				headers,
				signal: controller.signal,
			});

			clearTimeout(timeoutId);

			if (!response.ok) {
				let err:
					| string
					| Exclude<ResponseType<T>["error"], undefined | null>["error"];
				try {
					err = (await response.json()).error;
				} catch (error) {
					err = await response.text();
				}
				const error: ResponseType<T>["error"] = {
					status: response.status,
					statusText: response.statusText,
					error: typeof err === "object" ? err : undefined,
					message: typeof err === "string" ? err : err?.message,
				};

				return { data: null, error };
			}

			const data = (await response.json()) as T;

			return { data, error: null };
		} catch (err) {
			const error = err as Error;
			if (error.name === "AbortError") {
				return {
					data: null,
					error: {
						status: 408,
						statusText: "Request Timeout",
						message: `Request timed out after ${timeout}ms`,
					},
				};
			}

			if (attempt < retries) {
				continue;
			}

			return {
				data: null,
				error: {
					status: 500,
					statusText: "Network Error",
					message: error.message || "Unknown network error",
				},
			};
		}
	}

	return {
		data: null,
		error: {
			status: 500,
			statusText: "Unknown Error",
			message: "An unknown error occurred",
		},
	};
}
