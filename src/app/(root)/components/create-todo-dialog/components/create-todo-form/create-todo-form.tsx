import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction } from 'react'
import { useForm } from 'react-hook-form'

import { Button, Input, Label } from '@/components/ui'

import { CreateTodo, todoScheme } from '@/validators'

import { useCreateTodo } from '@/models'

interface CreateTodoFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CreateTodoForm: React.FC<CreateTodoFormProps> = ({
  setIsOpen,
}: CreateTodoFormProps) => {
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
  const searchParams = useSearchParams()
  const page = searchParams.get('page')

  const { mutate: createTodo } = useCreateTodo(page ? +page : 1)

  const onSubmit = (data: CreateTodo) => {
    createTodo(data)
    setIsOpen(false)
    reset()
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col gap-3'>
        <div className='grid w-full items-center gap-1.5'>
          <Label htmlFor='title' error={!!errors.title}>
            Title
          </Label>
          <Input
            size={'md'}
            error={!!errors.title}
            placeholder='title'
            {...register('title')}
            className='focus-visible:border-foreground !ring-0'
            autoComplete='off'
          />
          <ErrorMessage
            errors={errors}
            name='title'
            as={<p className='text-sm text-red-600'></p>}
          />
        </div>
      </div>
      <Button size='lg' className='mt-5 w-full' type='submit' disabled={isSubmitting}>
        Create
      </Button>
    </form>
  )
}
