import { Braces, Layers3, Lightbulb } from 'lucide-react'
import type { Principle } from '@/content/home'
import './principle-card.style.css'

interface PrincipleCardProps { principle: Principle }

const icons = { problem: Lightbulb, decision: Layers3, code: Braces }

export function PrincipleCard({ principle }: PrincipleCardProps) {
  const Icon = icons[principle.icon]
  const titleId = `principio-${principle.id}`
  return (
    <article aria-labelledby={titleId} className='principle-card'>
      <div className='flex items-start justify-between'>
        <span className='text-sm text-foreground/70'>{principle.number}</span>
        <Icon aria-hidden='true' className='size-5 text-primary' />
      </div>
      <h3 id={titleId} className='mt-14 font-heading text-2xl font-medium tracking-tight'>{principle.title}</h3>
      <p className='mt-4 max-w-sm leading-7 text-foreground/75'>{principle.description}</p>
    </article>
  )
}
