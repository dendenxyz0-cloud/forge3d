import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Forge3D | AI 3D Studio',
  description:
    'Turn prompts into production-ready 3D models, textures, and animation with Forge3D.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
