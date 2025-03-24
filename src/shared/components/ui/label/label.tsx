'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/shared/lib/css'

const labelVariants = cva(
  'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      error: {
        true: 'text-red-600',
        false: '',
      },
    },
    defaultVariants: {
      error: false,
    },
  },
)

function Label({
  className,
  error,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(labelVariants({ error, className }))}
      {...props}
    />
  )
}

export { Label }
