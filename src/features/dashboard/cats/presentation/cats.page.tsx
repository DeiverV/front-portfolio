import { Cat } from './components/cat'
import { useCatsPage } from './hooks/use-cats-page'

export const CatsPage = () => {
  const { allRows, parentRef, rowVirtualizer } = useCatsPage()

  return (
    <section className="m-auto flex flex-col gap-4 w-[600px] p-4 rounded-default">
      <h1 className="font-bold text-2xl">Cats!</h1>

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
