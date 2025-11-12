
import { Geist, Geist_Mono, Oswald, Outfit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
// Example of how the constant is typically declared
const oswald = Oswald({ subsets: ["latin"] });
const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Titanium Supplier",
  description: "Titanium Supplier",
  icons: {
    icon: '/image/aanaya.webp', // Default icon
    shortcut: '/image/aanaya.webp', // Shortcut icon
    apple: '/image/aanaya.webp', // Apple touch icon
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/path/to/apple-touch-icon-precomposed.png',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The GTM script for the <head> section is typically handled outside 
        the RootLayout component in Next.js using a custom Document or 
        special <Script> component, but for a simple integration, we'll 
        assume it's managed via a mechanism that renders it in the <head>.
        
        Since RootLayout manages the <html> tag, we'll focus on the <body> placement.
      */}

      <head>
        
        {/* --- Google Tag Manager Script (GTM-5J9GNG42) --- */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5J9GNG42');
            `,
          }}
        />
        {/* --- End Google Tag Manager Script --- */}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${oswald.className} ${outfit.className} antialiased`}
      >
        {/* --- Google Tag Manager (noscript) - IMMEDIATELY AFTER <body> TAG --- */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5J9GNG42"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* --- End Google Tag Manager (noscript) --- */}

        {children}
      </body>
    </html>
  );
}
