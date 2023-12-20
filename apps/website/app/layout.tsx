import { Inter } from 'next/font/google';
import { Menu } from '../components';
import './styles.css';

export const metadata = {
  title: 'Welcome to website',
  description: 'Generated by create-nx-workspace',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <Menu />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
