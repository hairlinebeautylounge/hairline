import Head from 'next/head';
import { ReactNode } from 'react';
import Header from './Header';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
}

const DEFAULT_TITLE = 'Hairline Beauty Lounge';
const DEFAULT_DESCRIPTION = 'Premium hair and beauty services with a focus on style, comfort, and care.';
const DEFAULT_OG_IMAGE = '/og-image.jpg';

export default function Layout({
  children,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  ogImage = DEFAULT_OG_IMAGE,
  twitterCard = 'summary_large_image',
}: LayoutProps) {
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={ogImage} />

        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Fonts (consider moving to _app.tsx or document for global include) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;700&family=Waiting+for+the+Sunrise&family=Montserrat:wght@100;200;300&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Semantic layout structure with consistent container and spacing */}
      <div className="min-h-screen bg-brand-dark text-gray-200 font-sans antialiased">
        <Header />
        <main id="main" role="main">
          {children}
        </main>
        <WhatsAppButton />
      </div>
    </>
  );
}