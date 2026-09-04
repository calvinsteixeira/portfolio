import { homeContent } from '@/content/home'
import { ActionLink } from '@/components/action-link/action-link'
import './hero-section.style.css'

export function HeroSection() {
  const { hero } = homeContent
  return (
    <section id='inicio' aria-labelledby='titulo-inicial' className='hero-section'>
      <div aria-hidden='true' className='hero-section__glow' />
      <div className='relative z-10 max-w-5xl'>
        <p className='mb-7 flex items-center gap-2 text-sm font-medium text-foreground/75'>
          <span aria-hidden='true' className='size-2 shrink-0 rounded-full bg-primary' />{hero.role}
        </p>
        <h1 id='titulo-inicial' className='hero-section__title'>
          {hero.title}{' '}<br />
          <em className='font-normal'>{hero.emphasis}</em>{' '}{hero.continuation}{' '}<br />
          {hero.ending}
        </h1>
        <div className='hero-section__support'>
          <p className='text-lg leading-8 text-foreground/75 md:text-xl'>{hero.description}</p>
          <ActionLink href='#abordagem'>{hero.action}</ActionLink>
        </div>
      </div>
      <div className='relative z-10 mt-20 border-t border-border pt-5 md:mt-28'>
        <p className='text-xs font-medium uppercase tracking-widest text-foreground/75'>{hero.summary}</p>
        <ul className='mt-5 grid gap-6 md:grid-cols-3 md:gap-10'>
          {hero.highlights.map((highlight) => <li key={highlight} className='text-base leading-6 text-foreground/80'>{highlight}</li>)}
        </ul>
      </div>
    </section>
  )
}
