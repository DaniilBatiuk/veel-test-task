import { Button } from '@/components/ui'

import { useUpdateSearchParams } from './hooks/use-update-search-params'

interface PaginationProps {
  page: number
  setPage: React.Dispatch<React.SetStateAction<number>>
}

export const Pagination: React.FC<PaginationProps> = ({ page, setPage }: PaginationProps) => {
  useUpdateSearchParams(page)

  return (
    <div className='mt-5 mb-5 flex items-center justify-center gap-x-4 md:mb-7 lg:mb-10'>
      <Button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
        Prev
      </Button>
      <div>
        <p className='text-xl'>{page}</p>
      </div>
      <Button onClick={() => setPage(prev => Math.min(prev + 1, 20))} disabled={page === 20}>
        Next
      </Button>
    </div>
  )
}
