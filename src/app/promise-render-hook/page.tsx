import { Dialog } from '@/src/components/Dialog'
import type { Metadata } from 'next'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Promise Render Hooks / Dialog | Yasuhiro Yamamoto Playground',
  description: 'Promise Render Hooks.',
  robots: 'noindex',
}

export default function PromiseRenderHooks() {
  return (
    <>
      <h1 className="text-xl font-semibold mb-5 text-center">Promise Render Hooks / Dialog</h1>
      <Dialog />
    </>
  )
}
