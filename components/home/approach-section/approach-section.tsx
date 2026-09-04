import { homeContent } from '@/content/home'
import { PrincipleCard } from '../principle-card/principle-card'
import { t } from '@/messages/pt-BR'
import './approach-section.style.css'

export function ApproachSection() {
  const { approach } = homeContent
  return (
    <section id='abordagem' aria-labelledby='titulo-abordagem' className='approach-section'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-10 border-b border-border pb-14 md:grid-cols-3 md:gap-20'>
          <p className='text-sm font-medium text-primary'>{t('approach.label')}</p>
          <h2 id='titulo-abordagem' className='font-heading text-4xl font-medium leading-tight tracking-tighter md:col-span-2 md:text-5xl'>{t('approach.title')}</h2>
        </div>
        <div className='grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0'>
          {approach.principles.map((principle) => <PrincipleCard key={principle.id} principle={principle} />)}
        </div>
      </div>
    </section>
  )
}
