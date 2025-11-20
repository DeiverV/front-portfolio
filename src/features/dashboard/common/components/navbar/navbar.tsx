import { useShallow } from 'zustand/react/shallow'
import {
  TbLayoutSidebarRightCollapseFilled,
  TbLayoutSidebarRightExpand,
} from 'react-icons/tb'
import { useSidebarStore } from '../../store/sidebar-store'
import { CustomizeStylesMenu } from '@/components/ui/customize-styles-menu'

export const Navbar = () => {
  const { isOpen, toggle } = useSidebarStore(
    useShallow((state) => ({
      isOpen: state.isOpen,
      toggle: state.toggle,
    })),
  )

  return (
    <nav className="w-full sticky top-0 bg-neutral backdrop-blur-xs px-4 py-2 flex h-[50px] items-center justify-between z-50">
      <div className="flex items-center gap-2">
        <button onClick={toggle} aria-label="Toggle Sidebar">
          {isOpen ? (
            <TbLayoutSidebarRightExpand size={24} />
          ) : (
            <TbLayoutSidebarRightCollapseFilled size={24} />
          )}
        </button>
        <span className="text-lg font-bold">Dashboard</span>
      </div>

      <CustomizeStylesMenu alignment='bottom'/>
    </nav>
  )
}
