import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';
import './globals.css';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { site } from '@/content/site';
import { themeColors } from '@/content/theme';

const archivo = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: site.title,
  description: site.description,
};

// Applies a stored theme choice before first paint so there is no flash.
// The theme-color metas follow the system by default; a stored choice
// overrides both, so the browser chrome matches the page, not the device.
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.dataset.theme=t;var c=${JSON.stringify(themeColors)}[t];document.querySelectorAll('meta[name="theme-color"]').forEach(function(m){m.content=c})}}catch(e){}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={archivo.variable} suppressHydrationWarning>
      <head>
        {/* Declares up front that the site draws its own dark theme. */}
        <meta name="color-scheme" content="light dark" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content={themeColors.light}
          suppressHydrationWarning
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content={themeColors.dark}
          suppressHydrationWarning
        />
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="sheet">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
