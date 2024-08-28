import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "../components/transitionProvider";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Legisiv",
  description: "Unlock the world of Policy with Legisiv! We supercharge the legislation writing and understanding process for teens, legislators, and policy enthusiasts alike through our innovative AI resources.",
  icons: {
    icon: '/favicon2.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8CP11C2HCC"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8CP11C2HCC');
            `,
          }}
        />
      </Head>
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
