import { Cat } from './components/cat'
import { CreateCatForm } from './components/create-cat-form/create-cat-form'
import { useCatsPage } from './hooks/use-cats-page'

import { Modal } from '@/components/ui/modal/modal'
import { useModal } from '@/components/ui/modal/hook/use-modal'

export const CatsPage = () => {
  const { allRows, parentRef, rowVirtualizer } = useCatsPage()

  const { closeModal, open, openModal } = useModal()

  return (
    <section className="m-auto flex flex-col gap-4 w-[350px] md:w-[550px] lg:w-[600px] p-4 rounded-default">
      <div className="flex items-center justify-between">
        <h1 className="font-bold text-2xl">Cats!</h1>

        <button
          onClick={openModal}
          className="px-4 py-2 bg-primary text-white rounded-default hover:bg-primary/80 transition"
        >
          Create Cat
        </button>
      </div>

      <Modal open={open} onClose={closeModal}>
        <CreateCatForm />
      </Modal>

      <section ref={parentRef} className="overflow-auto h-[80vh] w-full px-4">
        <div
          className="relative w-full grid gap-4"
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const isLoaderRow = virtualRow.index > allRows.length - 1
            const cat = allRows[virtualRow.index]

            return (
              <div
                key={virtualRow.index}
                className="absolute top-0 left-0 w-full"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                {isLoaderRow ? 'Loading more...' : <Cat cat={cat} />}
              </div>
            )
          })}
        </div>
      </section>
    </section>
  )
}
