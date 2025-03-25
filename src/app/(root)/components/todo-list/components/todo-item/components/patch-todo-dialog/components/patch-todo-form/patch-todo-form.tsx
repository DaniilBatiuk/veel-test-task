import { ErrorMessage } from '@hookform/error-message'
import type { Dispatch, SetStateAction } from 'react'

import { Button, Input, Label } from '@/components/ui'

import { usePatchTodoForm } from './hooks/use-patch-todo-form'

interface PatchTodoFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  todo: TodoDto
}

export const PatchTodoForm: React.FC<PatchTodoFormProps> = ({
  setIsOpen,
  todo,
}: PatchTodoFormProps) => {
  const { register, handleSubmit, errors, isSubmitting, onSubmit } = usePatchTodoForm(
    todo,
    setIsOpen,
  )

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
        Patch
      </Button>
    </form>
  )
}
