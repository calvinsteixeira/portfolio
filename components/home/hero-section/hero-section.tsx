import { homeContent } from '@/content/home'
import { ActionLink } from '@/components/action-link/action-link'
import { t } from '@/messages/pt-BR'
import './hero-section.style.css'

export function HeroSection() {
  const { hero } = homeContent
  return (
    <section id='inicio' aria-labelledby='titulo-inicial' className='hero-section'>
      <div className='relative z-10 max-w-5xl'>
        <p className='mb-7 flex items-center gap-2 text-sm font-medium text-foreground/75'>
          <span aria-hidden='true' className='size-2 shrink-0 rounded-full bg-primary' />{t('hero.role')}
        </p>
        <h1 id='titulo-inicial' className='hero-section__title'>
          {t('hero.title')}{' '}<br />
          <em className='font-normal'>{t('hero.emphasis')}</em>{' '}{t('hero.continuation')}{' '}<br />
          {t('hero.ending')}
        </h1>
        <div className='hero-section__support'>
          <p className='text-lg leading-8 text-foreground/75 md:text-xl'>{t('hero.description')}</p>
          <ActionLink href='#abordagem'>{t('hero.action')}</ActionLink>
        </div>
      </div>
      <div className='relative z-10 mt-20 border-t border-border pt-5 md:mt-28'>
        <p className='text-xs font-medium uppercase tracking-widest text-foreground/75'>{t('hero.summary')}</p>
        <ul className='mt-5 grid gap-6 md:grid-cols-3 md:gap-10'>
          {hero.highlights.map((highlight) => <li key={highlight} className='text-base leading-6 text-foreground/80'>{t(highlight)}</li>)}
        </ul>
      </div>
    </section>
  )
}
