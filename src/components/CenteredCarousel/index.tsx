'use client'

import type { EmblaOptionsType } from 'embla-carousel'
import { useState } from 'react'
import { useCarousel } from './useCarousel'
import AutoPlay from 'embla-carousel-autoplay'
import { cn } from '@/src/lib/tailwind'

export const CenteredCarousel: React.FC = () => {
  // 選択されているスライドのインデックス
  const [activeIndex, setActiveIndex] = useState<number>(0)

  // スライドのオプション
  const sliderOption: EmblaOptionsType = { loop: true, align: (viewSize, snapSize, index) => {
    const offset = snapSize / 2
    return offset
  }}

  // カスタムフックからスライド操作用のオブジェクトを取得
  const slider = useCarousel(setActiveIndex, sliderOption, [
    AutoPlay({
      delay: 5000,
      stopOnInteraction: false,
    }),
  ])

  const slideList = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5']

  return (
    <div className="grid gap-5">
      {/* スライド */}
      <div className="overflow-hidden" ref={slider.sliderRef}>
        <div className="flex">
          {slideList.map((item) => (
            <div className="shrink-0 grow-0 min-w-0 basis-1/2 aspect-video px-[1%]" key={item}>
              <div className="grid place-content-center h-full bg-gray-100">{item}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 左右ボタン */}
      <div className="flex justify-center gap-3">
        <button className="block border border-gray-200 py-2 px-5" type="button" onClick={slider.handlePrevScroll}>
          Prev
        </button>
        <button className="block border border-gray-200 py-2 px-5" type="button" onClick={slider.handleNextScroll}>
          Next
        </button>
      </div>

      {/* ページネーション */}
      <div className="flex justify-center gap-3">
        {[...Array(slideList.length)].map((_, i) => (
          <button
            className={cn('block border border-gray-200 py-2 px-5', activeIndex === i && 'bg-cyan-300')}
            type="button"
            onClick={() => slider.handleToRightScroll(i)}
            // biome-ignore lint/suspicious/noArrayIndexKey: サンプルのため、インデックスをキーとして利用
            key={i}
            data-active={activeIndex === i}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
