import { ErrorMessage } from '@hookform/error-message'
import type { Dispatch, SetStateAction } from 'react'

import { Button, Input, Label } from '@/components/ui'

import { useCreateTodoForm } from './hooks/use-create-todo-form'

interface CreateTodoFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const CreateTodoForm: React.FC<CreateTodoFormProps> = ({
  setIsOpen,
}: CreateTodoFormProps) => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = useCreateTodoForm(setIsOpen)

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
