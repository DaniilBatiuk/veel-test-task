import { useMutation } from '@tanstack/react-query'

import { getQueryClient, getTodoListQueryOptions } from '@/lib'

import { todoApi } from './api'

export const useTodoPatch = (page: number) => {
  const queryClient = getQueryClient()

  return useMutation({
    mutationFn: todoApi.patchTodo,

    onMutate: async patchTodo => {
      await queryClient.cancelQueries({
        queryKey: getTodoListQueryOptions(page).queryKey,
      })

      const previousTodosList = queryClient.getQueryData<TodoDto[]>(
        getTodoListQueryOptions(page).queryKey,
      )

      console.log('previousTodosList', previousTodosList)
      console.log('patchTodo', patchTodo)

      if (previousTodosList) {
        queryClient.setQueryData<TodoDto[]>(
          getTodoListQueryOptions(page).queryKey,
          previousTodosList.map(item =>
            item.id === patchTodo.id ? { ...item, ...patchTodo } : item,
          ),
        )
      }

      return { previousTodosList }
    },

    onError: (_, __, context) => {
      if (context) {
        queryClient.setQueryData(getTodoListQueryOptions(page).queryKey, context.previousTodosList)
      }
    },

    // ❌ Cannot invalidate the cache because JSONPlaceholder API does not actually patch todo.
    //
    // onSettled: () => {
    //   queryClient.invalidateQueries({ queryKey: getTodoListQueryOptions(page).queryKey })
    // },
  })
}
