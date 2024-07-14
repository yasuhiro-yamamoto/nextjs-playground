import { Carousel } from '@/src/components/Carousel'
import type { Metadata } from 'next'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Embla Carousel | Yasuhiro Yamamoto Playground',
  description: 'Carousel Slider.',
  robots: 'noindex',
}

export default function EmblaCarousel() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5 text-center">Embla Carousel</h1>
      <Carousel />
    </>
  )
}
