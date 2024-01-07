import { Kanit, Dosis, Inconsolata } from 'next/font/google';

export const kanit = Kanit({
    weight: '600',
    subsets: ['latin']
})

export const dosis = Dosis({
    weight: '400',
    subsets: ['latin']
})

export const inconsolata = Inconsolata({
    weight: ['700', '500', '200'],
    subsets: ['latin']
})