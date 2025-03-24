'use client'

import { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui'

import { CreateTodoForm } from './components/create-todo-form/create-todo-form'

interface CreateDictionaryDialogProps {
  children: React.ReactNode
  todo: { id: number }
}

export const CreateTodoDialog: React.FC<CreateDictionaryDialogProps> = ({
  children,
  todo,
}: CreateDictionaryDialogProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Create Todo</DialogTitle>
          <DialogDescription className='hidden'>Create Todo</DialogDescription>
        </DialogHeader>
        <CreateTodoForm todo={{ id: 0 }} setIsOpen={setIsOpen} />
      </DialogContent>
    </Dialog>
  )
}
