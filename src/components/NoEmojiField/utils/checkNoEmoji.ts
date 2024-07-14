import emojiRegex from 'emoji-regex'

// emoji以外ならtrueを返す
export function checkNoEmoji(text: string): boolean {
  const regex = emojiRegex()
  const noEmoji = new RegExp(`^(?!.*(${regex.source})).*$`)
  return noEmoji.test(text)
}
