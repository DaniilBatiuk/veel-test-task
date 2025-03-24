import { ThemeToggle } from './components/theme-toggle/theme-toggle'

export const Header: React.FC = () => {
  return (
    <header className='bg-background sticky top-0 z-50 flex h-[65px] items-center border-b-[1px]'>
      <div className='container flex items-center justify-between'>
        <ThemeToggle />
      </div>
    </header>
  )
}
