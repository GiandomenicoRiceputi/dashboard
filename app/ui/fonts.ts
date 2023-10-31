import { Inter, Lusitana, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
    subsets: ['latin'],
    variable: "--font-inter",
    display: 'swap'
});

export const lusitana = Lusitana({
    weight: ['400', '700'],
    variable: "--font-lusitana",
    subsets: ['latin'],
    display: 'swap'
});

export const robotoMono = Roboto_Mono({
    subsets: ['latin'],
    variable: "--font-roboto-mono",
    display: 'swap'
});
