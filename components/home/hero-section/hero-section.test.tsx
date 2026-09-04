import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { HeroSection } from './hero-section'

it('preserva o contrato acessível de HeroSection', () => {
  render(<HeroSection />)
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tecnologia com intenção, não só entrega.')
  expect(screen.getByRole('link', { name: 'Conheça minha abordagem' })).toHaveAttribute('href', '#abordagem')
})
