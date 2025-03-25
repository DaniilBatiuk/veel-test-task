import { useMutation } from '@tanstack/react-query'
import { v4 as uuidv4 } from 'uuid'

import { CreateTodo } from '@/validators'

import { getQueryClient, getTodoListQueryOptions } from '@/lib'

import { todoApi } from './api'

export const useCreateTodo = (page: number) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: todoApi.createTodo,

    onMutate: async (newTodo: CreateTodo) => {
      await queryClient.cancelQueries({ queryKey: getTodoListQueryOptions(page).queryKey })

      const tempId = parseInt(uuidv4().replace(/\D/g, '').slice(0, 15), 10)

      const previousTodosList =
        queryClient.getQueryData<TodoDto[]>(getTodoListQueryOptions(page).queryKey) || []

      queryClient.setQueryData<TodoDto[]>(getTodoListQueryOptions(page).queryKey, [
        { ...newTodo, id: tempId, completed: false, userId: 1 },
        ...previousTodosList,
      ])

      return { previousTodosList, tempId }
    },

    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(getTodoListQueryOptions(page).queryKey, context.previousTodosList)
      }
    },

    // ❌ Cannot invalidate the cache because JSONPlaceholder API does not actually create todo.
    //
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: getTodoListQueryOptions(page).queryKey })
    // },
  })
}
