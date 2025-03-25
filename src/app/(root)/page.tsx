import { Button } from '@/components/ui'

import { metadataFactory } from '@/helpers'

import { CreateTodoDialog } from './components/create-todo-dialog/create-todo-dialog'
import { TodoList } from './components/todo-list/todo-list'

export const metadata = metadataFactory('Home')

export default async function Home() {
  return (
    <section className='my-container mt-5 md:mt-7 lg:mt-10'>
      <div className='adaptive-margin-bottom-20-30 mb-4 flex items-center justify-between md:mb-6 lg:mb-8'>
        <h1 className='animate-appear-left text-2xl font-bold md:text-3xl lg:text-4xl'>Todos</h1>
        <CreateTodoDialog>
          <Button className='animate-appear-right'>Create Todo</Button>
        </CreateTodoDialog>
      </div>
      <TodoList />
    </section>
  )
}
