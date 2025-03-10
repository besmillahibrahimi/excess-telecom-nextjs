"use client";
import { Button } from "@/components/ui/button";

export default function GlobalError({
	error,
	reset,
}: Readonly<{
	error: Error & { digest?: string };
	reset: () => void;
}>) {
	return (
		<html lang="en">
			<body className="flex justify-center items-center min-h-screen text-red-600">
				<div>
					<h1 className="text-4xl font-bold">{error.name}</h1>
					<p className="text-xl">{error.message.toString()}</p>
					<pre>
						<code>{JSON.stringify(error, null, 2)}</code>
					</pre>
					<Button type="button" onClick={() => reset()}>
						Try again
					</Button>
				</div>
			</body>
		</html>
	);
}
