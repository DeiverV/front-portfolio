import { useVirtualizer } from '@tanstack/react-virtual'
import { useEffect, useRef } from 'react'
import { useGetInfiniteCats } from './use-get-cats'

export const useCatsPage = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetInfiniteCats({})

  const allRows = data ? data.pages.flatMap((cats) => cats) : []
  const parentRef = useRef<HTMLDivElement>(null)

  const rowVirtualizer = useVirtualizer({
    count: hasNextPage ? allRows.length + 5 : allRows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 430,
    overscan: 5,
  })

  useEffect(() => {
    const [lastItem] = [...rowVirtualizer.getVirtualItems()].reverse()

    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (!lastItem) return

    if (
      lastItem.index >= allRows.length - 1 &&
      hasNextPage &&
      !isFetchingNextPage
    ) {
      fetchNextPage()
    }
  }, [
    hasNextPage,
    fetchNextPage,
    allRows.length,
    isFetchingNextPage,
    rowVirtualizer.getVirtualItems(),
  ])

  return { allRows, parentRef, rowVirtualizer }
}
