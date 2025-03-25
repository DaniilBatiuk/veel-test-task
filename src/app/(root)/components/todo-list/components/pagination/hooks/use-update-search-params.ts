import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

export const useUpdateSearchParams = (page: number) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    router.push(`?${params.toString()}`, { scroll: false })
  }, [page])
}
