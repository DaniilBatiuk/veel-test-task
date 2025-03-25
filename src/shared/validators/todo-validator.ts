import { z } from 'zod'

export const todoScheme = z.object({
  title: z
    .string()
    .nonempty('The title field is required')
    .min(2, 'The title must contain at least 2 characters')
    .max(100, 'The title must contain no more than 100 characters'),
})

export type CreateTodo = z.infer<typeof todoScheme>
export type PatchTodo = z.infer<typeof todoScheme>
