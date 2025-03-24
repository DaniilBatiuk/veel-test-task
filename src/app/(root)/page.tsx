import { CircleX } from 'lucide-react'

import { Button, Checkbox } from '@/components/ui'

import { CreateTodoDialog } from './components/create-todo-dialog/create-todo-dialog'

const data = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: 'et porro tempora',
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
    completed: false,
  },
  {
    userId: 1,
    id: 6,
    title: 'qui ullam ratione quibusdam voluptatem quia omnis',
    completed: false,
  },
  {
    userId: 1,
    id: 7,
    title: 'illo expedita consequatur quia in',
    completed: false,
  },
  {
    userId: 1,
    id: 8,
    title: 'quo adipisci enim quam ut ab',
    completed: true,
  },
  {
    userId: 1,
    id: 9,
    title: 'molestiae perspiciatis ipsa',
    completed: false,
  },
  {
    userId: 1,
    id: 10,
    title: 'illo est ratione doloremque quia maiores aut',
    completed: true,
  },
]

export default function Home() {
  return (
    <section className='my-container mt-5 md:mt-7 lg:mt-10'>
      <div className='adaptive-margin-bottom-20-30 mb-4 flex items-center justify-between md:mb-6 lg:mb-8'>
        <h1 className='text-2xl font-bold md:text-3xl lg:text-4xl'>Todos</h1>
        <CreateTodoDialog todo={data[0]}>
          <Button>Create Todo</Button>
        </CreateTodoDialog>
      </div>
      <div className='flex flex-col gap-y-2'>
        {data.map(todo => (
          <div
            className='hover:bg-foreground/5 flex items-center justify-between space-x-3 rounded-lg border px-4 py-3'
            key={todo.id}
          >
            <div className='flex w-full max-w-[calc(100%-48px)] items-center space-x-3'>
              <Checkbox checked={todo.completed} className='size-5' />
              <p className='truncate'>{todo.title}</p>
            </div>
            <Button variant='destructive' size='icon' className='[&_svg]:!size-[1.2rem]'>
              <CircleX />
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
