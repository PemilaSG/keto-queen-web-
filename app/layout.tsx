import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keto Queen - Low-Carb Living Made Simple",
  description: "Explore Keto Queen premium keto snacks, supplements, beverages, and healthy low-carb living essentials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans bg-white text-stone-900">{children}</body>
    </html>
  );
}
