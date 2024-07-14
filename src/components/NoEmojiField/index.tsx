'use client'

import type { FC } from 'react'
import { useState } from 'react'
import { cn } from '@/src/lib/tailwind'
import { checkNoEmoji } from './utils/checkNoEmoji'

export const NoEmojiField: FC = () => {
  const [text, setText] = useState<string>('')
  const [isNoEmoji, setIsNoEmoji] = useState<boolean>(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
    setIsNoEmoji(checkNoEmoji(e.target.value))
  }

  return (
    <div className="grid gap-3">
      <h2 className={cn('text-center font-semibold', !isNoEmoji && 'text-red-500')}>絵文字は禁止だよ</h2>
      <input
        className={cn('border border-gray-300 rounded-md p-3 w-full outline-none', !isNoEmoji && 'border-red-500')}
        type="text"
        value={text}
        onChange={handleChange}
      />
    </div>
  )
}
