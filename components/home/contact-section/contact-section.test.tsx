import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ContactSection } from './contact-section'

it('preserva o contrato acessível de ContactSection', () => {
  render(<ContactSection />)
  expect(screen.getByRole('region', { name: 'Vamos resolver algo que importa?' })).toBeInTheDocument()
  const link = screen.getByRole('link', { name: 'Acesse meu LinkedIn' })
  expect(link).toHaveAttribute('href', 'https://www.linkedin.com/in/calvinteixeira/')
  expect(link).toHaveAttribute('target', '_blank')
})
