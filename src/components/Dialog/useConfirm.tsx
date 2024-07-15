import { useCallback, useState } from 'react'
import { cn } from '@/src/lib/tailwind'

type State = {
  isOpen: boolean
  resolve?: (bool: boolean) => void
}

const initialState: State = {
  isOpen: false,
}

export const useConfirm = () => {
  const [state, setState] = useState<State>(initialState)

  // 確認ダイアログを起動するための関数
  const requestConfirmation: () => Promise<boolean> = useCallback(() => {
    return new Promise((resolve) => {
      setState({
        ...state,
        isOpen: true,
        resolve,
      })
    })
  }, [state])

  // state.resolve は requestConfirmation 関数内で state に保存されている
  // これにより requestConfirmation 関数を呼び出したコンポーネントで resolve 関数を呼び出すことができ
  // OK を押すと true が返却されるのでOKを押したことを知ることができる
  const ok = () => {
    if (!state.resolve) return
    state.resolve(true)
    setState(initialState)
  }

  // OKと同じ理由でキャンセルボタンを押したことを知ることができる
  const cancel = () => {
    if (!state.resolve) return
    state.resolve(false)
    setState(initialState)
  }

  // render hooks 確認ダイアログのコンポーネント
  const renderConfirmDialog = (description: string) => (
    <div className={cn('hidden inset-0 fixed', state.isOpen && 'grid place-content-center z-50 bg-black/50')}>
      <div className="bg-white p-20 text-center grid gap-5">
        <p className="text-bold">{description}</p>
        <div className="flex gap-5 justify-center">
          <button className="border border-gray-200 py-1 px-4 text-sm font-semibold" type="button" onClick={cancel}>
            キャンセル
          </button>
          <button className="border border-gray-200 py-1 px-4 text-sm font-semibold" type="button" onClick={ok}>
            OK
          </button>
        </div>
      </div>
    </div>
  )

  return {
    requestConfirmation,
    renderConfirmDialog,
  }
}
