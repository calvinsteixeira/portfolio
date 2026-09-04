import { t } from '@/messages/pt-BR'
import './site-footer.style.css'

interface SiteFooterProps { year: number }

export function SiteFooter({ year }: SiteFooterProps) {
  return (
    <footer id='rodape' className='site-footer'>
      <p>{t('footer.copyright')}{' '}{year}{' '}{t('profile.name')}</p>
      <div className='flex flex-wrap gap-5'>
        <a className='transition-colors hover:text-primary' href='#cabecalho'>{t('footer.top')}</a>
        <span>{t('footer.signature')}</span>
      </div>
    </footer>
  )
}
