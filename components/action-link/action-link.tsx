import type { ComponentProps } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import './action-link.style.css'

interface ActionLinkProps extends ComponentProps<'a'> {
  variant?: 'primary' | 'outline'
}

export function ActionLink({ children, className, variant = 'primary', ...props }: ActionLinkProps) {
  return (
    <a {...props} className={cn('action-link', `action-link--${variant}`, className)}>
      {children}
      <ArrowUpRight aria-hidden='true' className='size-4 shrink-0' />
    </a>
  )
}
