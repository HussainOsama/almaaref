import type { Metadata } from "next";
import "../globals.css";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Al-Maaref Foundation",
  description: "Educational and cultural programs — Focus on internal trips.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={`${tajawal.className} bg-emerald-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
