import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=7" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Portfolio Tailwind CSS from Next JS"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="google"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&family=PT+Sans:wght@400;700&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
          crossOrigin="google-fonts"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v6.1.1/css/all.css"
          crossOrigin="anonymous"
        />
        <title>Portfolio Tailwind CSS from Next JS</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
