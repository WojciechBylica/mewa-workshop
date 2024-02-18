import { Menu } from '../../components';
import { Footer } from '../../components/Footer';

export const metadata = {
  title: 'Welcome to website',
  description: 'Generated by create-nx-workspace',
};

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen">
      <Menu />
      <main className="container mx-auto px-4 pt-6">{children}</main>
      <Footer />
    </div>
  );
}