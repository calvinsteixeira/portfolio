import { ChevronsLeftRightEllipsis } from 'lucide-react'
import { homeContent } from '@/content/home'
import { t } from '@/messages/pt-BR'
import './expertise-section.style.css'

export function ExpertiseSection() {
  const { expertise } = homeContent
  return (
    <section id='conhecimentos' aria-labelledby='titulo-conhecimentos' className='expertise-section'>
      <div className='mx-auto grid max-w-7xl gap-12'>
        <div>
          <p className='text-sm font-medium text-foreground/75'>{t('expertise.label')}</p>
          <h2 id='titulo-conhecimentos' className='mt-5 max-w-2xl font-heading text-4xl font-medium leading-tight tracking-tighter md:text-5xl'>{t('expertise.title')}</h2>
        </div>
        <div className='grid gap-10 md:grid-cols-2 md:gap-16'>
          <div>
            <p className='text-sm font-medium text-foreground/75'>{t('expertise.stackLabel')}</p>
            <p className='mt-3 max-w-xl text-lg leading-8 text-foreground/75'>{t('expertise.description')}</p>
            <ul aria-label={t('expertise.label')} className='mt-10 flex flex-wrap gap-2.5'>
              {expertise.items.map((item) => <li className='rounded-full border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground' key={item}>{t(item)}</li>)}
            </ul>
          </div>
          <div>
            <p className='text-sm font-medium text-foreground/75'>{t('expertise.aiLabel')}</p>
            <p className='mt-3 max-w-xl leading-7 text-foreground/75'>{t('expertise.aiDescription')}</p>
            <ul aria-label={t('expertise.aiLabel')} className='mt-6 flex flex-wrap gap-2.5'>
              {expertise.aiItems.map((item) => <li className='rounded-full border border-border bg-secondary px-4 py-2.5 text-sm font-medium text-secondary-foreground' key={item}>{t(item)}</li>)}
            </ul>
          </div>
          <p className='flex items-start gap-2 border-t border-border pt-6 text-sm leading-6 text-foreground/75 md:col-span-2'>
            <ChevronsLeftRightEllipsis aria-hidden='true' className='mt-1 size-4 shrink-0 text-primary' />{t('expertise.note')}
          </p>
        </div>
      </div>
    </section>
  )
}
