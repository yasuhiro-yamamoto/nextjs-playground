import { ShuffleImages } from '@/src/components/ShuffleImages';
import type { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Shuffle Images | Yasuhiro Yamamoto Playground',
  description: 'transform and DOMMatrix.',
  robots: 'noindex',
};

export default function ShuffleImagesPage() {
  return (
    <>
      <ShuffleImages />
    </>
  );
}
