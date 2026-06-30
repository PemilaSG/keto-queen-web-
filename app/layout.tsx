import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keto Queen",
  description: "Healthy Keto Products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#fafafa]">
        {children}
      </body>
    </html>
  );
}