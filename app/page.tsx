import { ApproachSection } from '@/components/home/approach-section/approach-section'
import { ContactSection } from '@/components/home/contact-section/contact-section'
import { ExpertiseSection } from '@/components/home/expertise-section/expertise-section'
import { HeroSection } from '@/components/home/hero-section/hero-section'
import { SiteFooter } from '@/components/home/site-footer/site-footer'
import { SiteHeader } from '@/components/home/site-header/site-header'
import './page.style.css'

export default function Home() {
  return (
    <div className='home-page'>
      <SiteHeader />
      <main id='conteudo' tabIndex={-1}>
        <HeroSection />
        <ApproachSection />
        <ExpertiseSection />
        <ContactSection />
      </main>
      <SiteFooter year={new Date().getFullYear()} />
    </div>
  )
}
