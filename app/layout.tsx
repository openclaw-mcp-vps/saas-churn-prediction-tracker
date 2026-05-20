import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ChurnGuard – Predict Customer Churn Before It Happens",
  description: "Analyzes user behavior patterns to identify customers likely to cancel in the next 30 days. Built for SaaS founders with 100+ customers."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="117c80d4-63a1-46c3-a373-717b2f1c5c1c"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
