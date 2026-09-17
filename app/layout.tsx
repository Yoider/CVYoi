import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Yoider Murillo Salazar | Software Engineer & Full Stack Developer',
  description:
    'Portafolio profesional interactivo de Yoider Murillo Salazar. Software Engineer especializado en arquitecturas backend (.NET Core), full-stack moderno (Next.js, TypeScript) e IA Multimodal en Sevilla, España.',
  keywords: [
    'Yoider Murillo Salazar',
    'Software Engineer',
    'Full Stack Developer',
    'Next.js',
    'TypeScript',
    '.NET Core',
    'Clean Architecture',
    'Multimodal AI',
    'Sevilla',
  ],
  authors: [{ name: 'Yoider Murillo Salazar' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-canvas text-zinc-100 min-h-screen antialiased selection:bg-blue-500/20 selection:text-blue-300">
        {children}
      </body>
    </html>
  );
}
