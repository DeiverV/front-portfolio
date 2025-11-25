import { useState } from 'react'

export const useModal = () => {
  const [open, setOpen] = useState(false)

  return {
    open,
    openModal: () => setOpen(true),
    closeModal: () => setOpen(false),
    toggleModal: () => setOpen((p) => !p),
  }
}
