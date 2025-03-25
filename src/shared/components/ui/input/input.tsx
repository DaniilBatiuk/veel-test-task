import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib'

export const inputVariants = cva(
  'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
  {
    variants: {
      size: {
        default: 'h-9 px-3 py-1',
        md: 'h-12 px-5 !text-base',
      },
      error: {
        true: 'border-red-600 focus-visible:!border-red-600 ',
        false: '',
      },
    },
    defaultVariants: {
      size: 'default',
      error: false,
    },
  },
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {}

function Input({ className, type, size, error, ...props }: InputProps) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(inputVariants({ size, className, error }))}
      {...props}
    />
  )
}

export { Input }
