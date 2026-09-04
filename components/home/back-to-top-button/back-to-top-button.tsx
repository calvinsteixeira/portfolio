'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

import { homeContent } from '@/content/home'
import { t } from '@/messages/pt-BR'
import { cn } from '@/lib/utils'

import './back-to-top-button.style.css'

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const { backToTop } = homeContent

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY >= backToTop.threshold)
    }

    updateVisibility()
    window.addEventListener('scroll', updateVisibility, { passive: true })

    return () => window.removeEventListener('scroll', updateVisibility)
  }, [backToTop.threshold])

  return (
    <a
      aria-label={t('backToTop.label')}
      aria-hidden={!isVisible}
      className={cn('back-to-top', isVisible && 'back-to-top--visible')}
      href='#cabecalho'
      tabIndex={isVisible ? undefined : -1}
    >
      <ArrowUp aria-hidden='true' className='size-5' />
    </a>
  )
}
