import { CircleX, RefreshCcw } from 'lucide-react'

import { Button, Checkbox } from '@/components/ui'

import { cn } from '@/lib'

import { PatchTodoDialog } from './components/patch-todo-dialog/patch-todo-dialog'
import { useTodoDelete, useTodoPatch } from '@/models'

interface TodoItemProps extends React.HTMLAttributes<HTMLDivElement> {
  todo: TodoDto
  page: number
}

export const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  page,
  className,
  ...props
}: TodoItemProps) => {
  const { mutate: deleteTodo, isPending: deleteTodoIsPending } = useTodoDelete(page)
  const { mutate: patchTodo } = useTodoPatch(page)

  return (
    <div
      className={cn(
        'hover:bg-foreground/5 flex items-center justify-between space-x-3 rounded-lg border px-4 py-3',
        className,
      )}
      {...props}
    >
      <div className='flex w-full max-w-[calc(100%-90px)] items-center space-x-3'>
        <Checkbox
          defaultChecked={todo.completed}
          className='size-5 cursor-pointer'
          aria-label='Completed todo'
          onClick={() => patchTodo({ ...todo, completed: !todo.completed })}
        />
        <p className='truncate'>{todo.title}</p>
      </div>
      <div className='flex space-x-2.5'>
        <PatchTodoDialog todo={todo}>
          <Button variant='secondary' size='icon' className='[&_svg]:!size-[1.2rem]'>
            <span className='sr-only'>Patch todo</span>
            <RefreshCcw />
          </Button>
        </PatchTodoDialog>
        <Button
          variant='destructive'
          size='icon'
          className='[&_svg]:!size-[1.2rem]'
          disabled={deleteTodoIsPending}
          onClick={() => deleteTodo(todo.id)}
        >
          <span className='sr-only'>Delete todo</span>
          <CircleX />
        </Button>
      </div>
    </div>
  )
}
