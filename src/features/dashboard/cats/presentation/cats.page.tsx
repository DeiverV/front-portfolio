import { useGetCats } from './hooks/use-get-cats'

export const CatsPage = () => {
  const { data, isFetching } = useGetCats({})

  if (isFetching) return <div>loading...</div>

  return (
    <div>
      {data?.map((cat) => (
        <div key={cat.id}>
          <h3>{cat.id}</h3>
          <p>{cat.tags}</p>
        </div>
      ))}
    </div>
  )
}
