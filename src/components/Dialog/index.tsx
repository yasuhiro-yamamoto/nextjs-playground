'use client'

import type { FC } from 'react'
import { useConfirm } from './useConfirm'

export const Dialog: FC = () => {
  // コンポーネントではなく カスタムフックとして コンポーネントも render hooks にすることで責務を集約できる
  // これによりOKまたはキャンセルを押したときの処理をフックを使うコンポーネント側で実装することができる
  const { requestConfirmation, renderConfirmDialog } = useConfirm()

  const onSubmit = async () => {
    // 確認ダイアログを表示
    // 「OK」か「キャンセル」を押すまで次の処理は待機
    const isConfirm = await requestConfirmation()

    // OK および キャンセル に応じて処理を実行
    if (isConfirm) {
      window.alert('登録しました')
    } else {
      window.alert('キャンセルします')
    }
  }

  return (
    <div className="grid place-content-center place-items-center gap-5">
      <p>登録したい方は、登録ボタンを押してください。</p>
      <button className="border border-gray-200 py-1 px-4 text-sm font-semibold" type="button" onClick={onSubmit}>
        登録
      </button>

      {renderConfirmDialog('登録しますか？')}
    </div>
  )
}
