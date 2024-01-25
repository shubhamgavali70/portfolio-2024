import type { Metadata } from 'next'

export { default } from '@/screens/HomePage'

export const metadata: Metadata = {
    metadataBase: new URL('https://acme.com'),
    title: "It's me 😬",
    description: "Here you find everything about me..",
    openGraph: {
        images: './victory-hand-emoji.png'
    }
}