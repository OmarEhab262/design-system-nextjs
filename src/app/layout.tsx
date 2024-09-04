import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/providers/ThemeProvider";
export const metadata: Metadata = {
  title: "Next.js",
  description: "GG",
  icons: {
    icon: "/favicon.ico", // Correct path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ThemeProvider enableSystem attribute="class" defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
