import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { useForm } from 'react-hook-form'

import { type CreateTodo, todoScheme } from '@/validators'

import { useCreateTodo } from '@/models'

export const useCreateTodoForm = (setIsOpen: (isOpen: boolean) => void) => {
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
      title: '',
    },
    mode: 'onSubmit',
  })

  const { mutate: createTodo } = useCreateTodo(page ? +page : 1)

  const onSubmit = (data: CreateTodo) => {
    createTodo(data)
    setIsOpen(false)
    reset()
  }

  return { register, handleSubmit, reset, errors, isSubmitting, onSubmit }
}
