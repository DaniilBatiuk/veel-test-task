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

import { PatchTodoForm } from './components/patch-todo-form/patch-todo-form'

interface PatchTodoDialogProps {
  children: React.ReactNode
  todo: TodoDto
}

export const PatchTodoDialog: React.FC<PatchTodoDialogProps> = ({
  children,
  todo,
}: PatchTodoDialogProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className='max-w-[500px]'>
        <DialogHeader>
          <DialogTitle>Patch Todo</DialogTitle>
          <DialogDescription className='hidden'>Patch Todo</DialogDescription>
        </DialogHeader>
        <PatchTodoForm setIsOpen={setIsOpen} todo={todo} />
      </DialogContent>
    </Dialog>
  )
}
