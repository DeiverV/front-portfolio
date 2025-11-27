import { TbX } from 'react-icons/tb'

export const AlertError = ({ error }: { error: string }) => {
  return (
    <div className="w-full p-2 bg-red-200 rounded-default flex items-center gap-1">
      <TbX className="stroke-red-500" size={18} />
      <p className="text-sm text-red-500 font-bold">{error}</p>
    </div>
  )
}
