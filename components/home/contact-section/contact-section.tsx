import { homeContent } from '@/content/home'
import './contact-section.style.css'

export function ContactSection() {
  const { contact } = homeContent
  return (
    <section id='contato' aria-labelledby='titulo-contato' className='contact-section'>
      <div className='contact-section__panel'>
        <div>
          <p className='text-sm font-medium'>{contact.label}</p>
          <h2 id='titulo-contato' className='mt-5 max-w-2xl font-heading text-5xl font-medium leading-tight tracking-tighter md:text-7xl'>{contact.title}</h2>
        </div>
        <p className='text-sm font-medium'>{contact.pending}</p>
      </div>
    </section>
  )
}
