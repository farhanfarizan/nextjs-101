import "./globals.css";
import type { Metadata } from "next";
import 'windi.css'

export const metadata: Metadata = {
  title: "Nextjs Info",
  description: "Created by Farhan for his own referrence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
