import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Life Archive — Rose',
  description: 'A private, thoughtful workspace for the life you are building.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
