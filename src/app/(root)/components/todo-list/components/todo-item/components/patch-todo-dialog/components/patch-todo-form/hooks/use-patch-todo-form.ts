import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { type CreateTodo, type PatchTodo, todoScheme } from '@/validators'

import { useTodoPatch } from '@/models'

export const usePatchTodoForm = (todo: TodoDto, setIsOpen: (isOpen: boolean) => void) => {
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateTodo>({
    resolver: zodResolver(todoScheme),
    defaultValues: {
      title: todo.title,
    },
    mode: 'onSubmit',
  })

  const { mutate: patchTodo } = useTodoPatch(page ? +page : 1)

  const onSubmit = (data: PatchTodo) => {
    patchTodo({ ...todo, ...data })
    setIsOpen(false)
    reset()
  }

  return { register, handleSubmit, reset, errors, isSubmitting, onSubmit }
}
