import { Skeleton } from '@/components/ui'

export const TodosSkeleton: React.FC = () => {
  return (
    <div>
      <div className='flex flex-col gap-y-2'>
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className='flex h-[62px] items-center justify-between space-x-3 rounded-lg border'
          />
        ))}
      </div>
    </div>
  )
}
