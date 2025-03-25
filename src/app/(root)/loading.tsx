import { Skeleton } from '@/components/ui'

import { TodosSkeleton } from './components/todo-list/components/todos-skeleton/todos-skeleton'

// This Loading is used to avoid writing Suspense every time when using useSearchParams
export default function Loading() {
  return (
    <div className='my-container mt-5 md:mt-7 lg:mt-10'>
      <div className='adaptive-margin-bottom-20-30 mb-4 flex items-center justify-between md:mb-6 lg:mb-8'>
        <Skeleton className='h-10 w-[108px]' />
        <Skeleton className='h-9 w-[144px]' />
      </div>
      <TodosSkeleton />
    </div>
  )
}
