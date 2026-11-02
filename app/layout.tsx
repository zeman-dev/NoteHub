import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import TanStackProvider from '@/components/TanStackProvider/TanStackProvider';
import AuthProvider from '@/components/AuthProvider/AuthProvider';

export const metadata: Metadata = {
  title: 'NoteHub',
  description:
    'A simple and efficient app for creating and organizing your notes',
  openGraph: {
    type: 'website',
    title: 'NoteHub',
    description:
      'A simple and efficient app for creating and organizing your notes',
    url: 'https://notehub.com/',
    images: [
      { url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
        width: 1200,
          height: 630,
          alt: 'App Improvements',
      },
      
    ],
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>
          <AuthProvider>
          <Header />
          {modal}
          {children}
          <Footer />
          </AuthProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
