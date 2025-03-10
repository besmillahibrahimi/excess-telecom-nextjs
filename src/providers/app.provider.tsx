"use client";
import { createContext, useContext, useMemo } from "react";

const AppContext = createContext({
	locale: "en",
});

export const useApp = () => {
	const context = useContext(AppContext);
	if (!context) {
		throw new Error("useApp must be used within an AppProvider");
	}
	return context;
};

export default function AppProvider({
	children,
	locale,
}: Readonly<{
	children: React.ReactNode;
	locale: string;
}>) {
	const value = useMemo(() => ({ locale }), [locale]);
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
