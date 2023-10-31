import '@/app/ui/global.css';
import { inter, robotoMono, lusitana } from '@/app/ui/fonts';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en"
            className={`${inter.variable} ${robotoMono.variable} ${lusitana.variable} antialiased`}
      >
      <body>{children}</body>
      </html>
  );
}
