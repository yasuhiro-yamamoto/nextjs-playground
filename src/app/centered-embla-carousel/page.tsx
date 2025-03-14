import { CenteredCarousel } from '@/src/components/CenteredCarousel';
import type { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Centered Embla Carousel | Yasuhiro Yamamoto Playground',
  description: 'Carousel Slider.',
  robots: 'noindex',
};

export default function CenteredEmblaCarousel() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5 text-center">Embla Carousel</h1>
      <CenteredCarousel />
    </>
  );
}
