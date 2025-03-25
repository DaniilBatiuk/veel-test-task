import { keepPreviousData, queryOptions } from '@tanstack/react-query'

import { todoApi } from '@/models'

export const getTodoListQueryOptions = (page: number) => {
  return queryOptions({
    queryKey: ['todo', 'list', page],
    queryFn: meta => todoApi.getTodoList({ page, signal: meta.signal }),
    placeholderData: keepPreviousData,
  })
}
