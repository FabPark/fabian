import './globals.css';
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

//components
import Navbar from './components/nav'
import { LDMode } from './components/ldmode';
import { ThemeProvider } from './components/theme';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fabian',
  description: 'landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classNames = [GeistSans.variable, GeistMono.variable].join(' ');

  return (
    <html lang="en" className={classNames}>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto ">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <LDMode />
          <Navbar />
          {children}
        </main> </ThemeProvider>
      </body>
    </html>
  );
}
