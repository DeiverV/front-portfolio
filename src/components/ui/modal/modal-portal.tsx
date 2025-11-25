import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import type { PropsWithChildren } from 'react'

export const ModalPortal = ({ children }: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null

  return createPortal(children, modalRoot)
}
