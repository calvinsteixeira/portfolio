import { Sparkles } from 'lucide-react'
import { homeContent } from '@/content/home'
import './expertise-section.style.css'

export function ExpertiseSection() {
  const { expertise } = homeContent
  return (
    <section id='conhecimentos' aria-labelledby='titulo-conhecimentos' className='expertise-section'>
      <div className='mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-20'>
        <div>
          <p className='text-sm font-medium text-foreground/75'>{expertise.label}</p>
          <h2 id='titulo-conhecimentos' className='mt-5 max-w-sm font-heading text-4xl font-medium leading-tight tracking-tighter md:text-5xl'>{expertise.title}</h2>
        </div>
        <div className='md:col-span-2'>
          <p className='max-w-xl text-lg leading-8 text-foreground/75'>{expertise.description}</p>
          <ul aria-label={expertise.label} className='mt-10 flex flex-wrap gap-2.5'>
            {expertise.items.map((item) => <li className='rounded-full border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground' key={item}>{item}</li>)}
          </ul>
          <p className='mt-14 flex items-start gap-2 border-t border-border pt-6 text-sm leading-6 text-foreground/75'>
            <Sparkles aria-hidden='true' className='mt-1 size-4 shrink-0 text-primary' />{expertise.note}
          </p>
        </div>
      </div>
    </section>
  )
}
