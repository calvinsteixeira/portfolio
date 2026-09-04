import { homeContent } from '@/content/home'
import { ActionLink } from '@/components/action-link/action-link'
import './site-header.style.css'

export function SiteHeader() {
  const { profile, navigation } = homeContent
  return (
    <header id='cabecalho' className='site-header'>
      <a href='#conteudo' className='site-header__skip'>{navigation.skip}</a>
      <a href='#inicio' className='flex items-center gap-3 text-sm font-semibold tracking-tight'>
        <span aria-hidden='true' className='grid size-9 place-items-center rounded-full bg-foreground font-heading text-xs text-background'>{profile.initials}</span>
        <span>{profile.name}</span>
      </a>
      <nav aria-label={navigation.label} className='order-last w-full md:order-none md:w-auto'>
        <ul className='flex flex-wrap gap-x-6 gap-y-3 text-sm text-foreground/80'>
          {navigation.links.map((link) => (
            <li key={link.href}><a className='transition-colors hover:text-primary' href={link.href}>{link.label}</a></li>
          ))}
        </ul>
      </nav>
      <ActionLink href='#contato' variant='outline' className='hidden md:inline-flex'>{navigation.contact}</ActionLink>
    </header>
  )
}
