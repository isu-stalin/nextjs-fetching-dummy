import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#f3f4f6', color: '#111827', minHeight: '100vh', fontFamily: inter.style.fontFamily }}>
        <Header />
        <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '24px' }}>
          {children}
        </main>
      </body>
    </html>
  );
}
