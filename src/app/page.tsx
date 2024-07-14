import Link from 'next/link'

export const runtime = 'edge'

export default function Home() {
  return (
    <div className="w-fit mx-auto p-10 bg-gray-100">
      <h1 className="font-semibold mb-5">Yasuhiro Yamamoto Playground</h1>
      <ul className="list-disc pl-4 grid gap-2">
        <li>
          <Link href="/embla-carousel">Embla Carousel</Link>
        </li>
        <li>
          <Link href="/emoji-regex">Emoji Regex</Link>
        </li>
      </ul>
    </div>
  )
}
