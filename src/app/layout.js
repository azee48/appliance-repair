import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fast, Same-Day Appliance Repair Near You",
  description: "Certified technicians for all major appliance brands. Guaranteed same-day service and 90-day parts warranty. Call now!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ==========================================================
            GOOGLE ADS & ANALYTICS TRACKING SCRIPT
            Replace "AW-YOUR_ID_HERE" with your actual Google tracking ID
            ========================================================== */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17958953115`}
        />
        <Script
          id="google-ads-tracking"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // This single tag tracks all traffic and automatically swaps
              // your phone numbers if you are using Google Call Tracking!
              gtag('config', 'AW-17958953115');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
