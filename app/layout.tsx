import type { Metadata } from "next";
import "./globals.css";
import { Tajawal } from "next/font/google";

const tajawal = Tajawal({ subsets: ["arabic"], weight: ["400", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://almaaref.example.com"),
  title: "مؤسسة المعارف",
  description:
    "مؤسسة تربوية وثقافية تهتم ببناء الفرد معرفيًا وروحيًا — الرحلات الداخلية.",
  openGraph: {
    title: "مؤسسة المعارف",
    description: "رحلات داخلية تربوية واجتماعية وثقافية.",
    url: "https://almaaref.example.com",
    siteName: "مؤسسة المعارف",
    locale: "ar_KW",
    type: "website",
    images: [{ url: "/images/logo.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "مؤسسة المعارف",
    description: "رحلات داخلية تربوية واجتماعية وثقافية.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${tajawal.className} bg-emerald-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
