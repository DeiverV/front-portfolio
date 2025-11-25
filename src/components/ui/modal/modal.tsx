import { ModalPortal } from './modal-portal'

interface ModalProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  return (
    <ModalPortal>
      <div
        className={`
          fixed inset-0 flex items-center justify-center
          transition-opacity duration-300 
          ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        />

        <div
          className={`
            absolute bg-neutral rounded-default bottom-0 rounded-b-none sm:rounded-b-default sm:bottom-auto p-4 shadow-2xl max-h-[80vh] overflow-x-auto sm:max-w-lg w-full
            transform transition-all duration-300
            ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          `}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  )
}
