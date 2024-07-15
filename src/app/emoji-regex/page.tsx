import { NoEmojiField } from '@/src/components/NoEmojiField'
import type { Metadata } from 'next'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Emoji Regex | Yasuhiro Yamamoto Playground',
  description: 'No Emoji Field.',
  robots: 'noindex',
}

export default function EmojiRegex() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5 text-center">No Emoji Field.(by emoji-regex)</h1>
      <NoEmojiField />
    </>
  )
}
