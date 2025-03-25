import { useMutation } from '@tanstack/react-query'

import { getQueryClient, getTodoListQueryOptions } from '@/lib'

import { todoApi } from './api'

export const useTodoDelete = (page: number) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: todoApi.deleteTodo,

    onMutate: async deleteTodoId => {
      await queryClient.cancelQueries({
        queryKey: getTodoListQueryOptions(page).queryKey,
      })

      const previousTodosList = queryClient.getQueryData<TodoDto[]>(
        getTodoListQueryOptions(page).queryKey,
      )

      if (previousTodosList) {
        queryClient.setQueryData<TodoDto[]>(
          getTodoListQueryOptions(page).queryKey,
          previousTodosList.filter(item => item.id !== deleteTodoId),
        )
      }

      return { previousTodosList }
    },

    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(getTodoListQueryOptions(page).queryKey, context.previousTodosList)
      }
    },

    // ❌ Cannot invalidate the cache because JSONPlaceholder API does not actually delete todo.
    //
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: getTodoListQueryOptions(page).queryKey })
    // },
  })
}
