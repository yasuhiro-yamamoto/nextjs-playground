import { describe, it, expect } from 'vitest'
import { checkNoEmoji } from './checkNoEmoji'
import emojiList from './emoji.json'

describe('絵文字以外を正しく判定できるか', async () => {
  for (const emojis of Object.values(emojiList.group)) {
    for (const emoji of emojis) {
      it(`絵文字${emoji}単体でfalse`, async () => {
        expect(checkNoEmoji(emoji)).toBe(false)
      })
      it(`絵文字${emoji}を前に含むもfalse`, async () => {
        expect(checkNoEmoji(`${emoji}だよん`)).toBe(false)
      })
      it(`絵文字${emoji}を後ろに含むもfalse`, async () => {
        expect(checkNoEmoji(`そう${emoji}`)).toBe(false)
      })
      it(`絵文字${emoji}を真ん中に含むもfalse`, async () => {
        expect(checkNoEmoji(`そう、${emoji}だよん`)).toBe(false)
      })
    }
  }
  it('絵文字じゃないならtrue', async () => {
    expect(checkNoEmoji('こんにちは、私には絵文字は含まれていませんよ!1234567890')).toBe(true)
  })
})
