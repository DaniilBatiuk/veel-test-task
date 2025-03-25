import Link from 'next/link'

import { ICONS, LINKS } from '@/constants'

import { ThemeToggle } from './components/theme-toggle/theme-toggle'

export const Header: React.FC = () => {
  return (
    <header className='bg-background sticky top-0 z-50 flex h-[65px] items-center border-b-[1px]'>
      <div className='my-container flex w-full items-center justify-between'>
        <Link href={LINKS.Home} className='group flex items-center space-x-2'>
          {ICONS.logo({
            className: 'size-[40px] group-hover:animate-spin',
          })}
          <p className='font-bold'>Veel</p>
        </Link>
        <ThemeToggle />
      </div>
    </header>
  )
}
