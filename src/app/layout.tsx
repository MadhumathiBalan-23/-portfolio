import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Madhumathi B | Full Stack Software Developer",
  description:
    "Professional portfolio of Madhumathi B — Full Stack Software Developer with 1.5 years experience in building web, mobile, and enterprise ERP solutions using React.js, TypeScript, C#, .NET Web API, and PostgreSQL.",
  keywords: [
    "Madhumathi B",
    "Full Stack Developer",
    "Software Developer",
    "React.js Developer",
    "Next.js Developer",
    "TypeScript",
    "ASP.NET Core",
    ".NET Web API",
    "PostgreSQL",
    "Erode",
    "Tamil Nadu",
  ],
  authors: [{ name: "Madhumathi B" }],
  creator: "Madhumathi B",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://madhumathi-portfolio.dev",
    title: "Madhumathi B | Full Stack Software Developer",
    description:
      "Full Stack Software Developer with 1.5 years of experience building reliable web, mobile, and ERP solutions.",
    siteName: "Madhumathi B Portfolio",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans scroll-smooth`}>
      <body className="min-h-screen bg-white text-[#172044] antialiased flex flex-col selection:bg-[#EAE5F8] selection:text-[#6C3DE8]">
        {children}
      </body>
    </html>
  );
}
