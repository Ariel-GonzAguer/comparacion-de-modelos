import '../styles.css';

import type { ReactNode } from 'react';
import { Footer } from '../components/footer';
import { Header } from '../components/header';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <html lang="en">
      <div className="font-['Nunito']">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={data.description} />
        <link rel="icon" type="image/png" href={data.icon} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          precedence="font"
        />
        <Header />
        <main className="mx-auto min-h-svh max-w-5xl px-6 py-12">
          {children}
        </main>
        <Footer />
      </div>
    </html>
  );
}

const getData = async () => {
  const data = {
    description: 'Benchmark de modelos de IA generando código frontend. Misma feature, mismo prompt, mismos criterios.',
    icon: '/images/favicon.png',
  };

  return data;
};

export const getConfig = async () => {
  return {
    render: 'static',
  } as const;
};
