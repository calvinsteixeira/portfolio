import { homeContent } from '@/content/home'
import './site-footer.style.css'

interface SiteFooterProps { year: number }

export function SiteFooter({ year }: SiteFooterProps) {
  const { profile, footer } = homeContent
  return (
    <footer id='rodape' className='site-footer'>
      <p>{footer.copyright}{' '}{year}{' '}{profile.name}</p>
      <div className='flex flex-wrap gap-5'>
        <a className='transition-colors hover:text-primary' href='#cabecalho'>{footer.top}</a>
        <span>{footer.signature}</span>
      </div>
    </footer>
  )
}
