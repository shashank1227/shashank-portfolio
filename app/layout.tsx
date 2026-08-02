import type { Metadata, Viewport } from 'next';
import { Bricolage_Grotesque, DM_Sans } from 'next/font/google';
import Providers from '@/components/Providers';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = 'https://shashank1227.github.io/shashank-portfolio/';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Shashank Shekhar Singh | Senior Software Engineer',
  description:
    'Senior Software Engineer with 5+ years of experience building scalable React, TypeScript, Node.js, Java, Spring Boot, and AI-enabled products.',
  keywords: [
    'Senior Software Engineer',
    'React',
    'TypeScript',
    'Node.js',
    'Java',
    'Spring Boot',
    'OpenAI',
    'LangChain',
    'RAG',
    'Portfolio',
  ],
  authors: [{ name: 'Shashank Shekhar Singh' }],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'Shashank Shekhar Singh | Senior Software Engineer',
    description:
      'Senior Software Engineer building scalable frontend systems, enterprise platforms, and AI-enabled products with React, TypeScript, Java, Spring Boot, and LLM technologies.',
    images: [
      {
        url: '/meta-image-v3.png',
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shashank Shekhar Singh | Senior Software Engineer',
    description: 'React, TypeScript, Node.js, Java, Spring Boot, and AI-powered product development.',
    images: ['/meta-image-v3.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#0e0d0a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0a0a0a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('portfolio-theme');
                if (theme === 'light' || theme === 'dark') {
                  document.documentElement.setAttribute('data-theme', theme);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
