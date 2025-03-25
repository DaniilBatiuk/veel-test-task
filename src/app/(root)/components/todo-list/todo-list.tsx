'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

import { cn, getTodoListQueryOptions } from '@/lib'

import { Pagination } from './components/pagination/pagination'
import { TodoItem } from './components/todo-item/todo-item'
import { TodosSkeleton } from './components/todos-skeleton/todos-skeleton'

export const TodoList: React.FC = () => {
  const searchParams = useSearchParams()
  const pageFromParams = searchParams.get('page')

  const [page, setPage] = useState(() => (pageFromParams ? +pageFromParams : 1))

  const {
    data: todos,
    isPending,
    error,
    isPlaceholderData,
  } = useQuery(getTodoListQueryOptions(page))

  if (isPending) return <TodosSkeleton />

  if (error) return <p>{error.message}</p>

  return (
    <div>
      <div className={cn('flex flex-col gap-y-2', { 'opacity-50': isPlaceholderData })}>
        {todos.length <= 0 ? (
          <div className='bg-foreground/5 flex h-50 items-center justify-center rounded-2xl'>
            <p className='text-2xl font-bold'>No Todos</p>
          </div>
        ) : (
          todos.map(todo => <TodoItem todo={todo} key={todo.id} page={page} />)
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  )
}
