import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AllerScan – Scan Restaurant Menus for Hidden Allergens",
  description: "Upload a menu photo and instantly see which dishes are safe for your food allergies. Powered by OCR and AI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="76ff63c2-4909-45a8-946e-39431d4d9899"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
