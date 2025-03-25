export const todoApi = {
  getTodoList: ({ page, signal }: { page: number; signal: AbortSignal }) => {
    return fetch(`${process.env.NEXT_PUBLIC_TODOS_API_URL}?_limit=10&_page=${page}`, {
      signal,
    }).then(res => res.json() as Promise<TodoDto[]>)
  },

  createTodo: (newTodo: { title: string }) => {
    return fetch(`${process.env.NEXT_PUBLIC_TODOS_API_URL}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(newTodo),
    }).then(res => res.json() as Promise<TodoDto>)
  },

  patchTodo: (todoToUpdate: TodoDto) => {
    return fetch(`${process.env.NEXT_PUBLIC_TODOS_API_URL}/${todoToUpdate.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(todoToUpdate),
    }).then(res => res.json() as Promise<TodoDto>)
  },

  deleteTodo: (id: number) => {
    return fetch(`${process.env.NEXT_PUBLIC_TODOS_API_URL}/${id}`, {
      method: 'DELETE',
    })
  },
}
