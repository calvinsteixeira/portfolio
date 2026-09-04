import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ContactSection } from './contact-section'

it('preserva o contrato acessível de ContactSection', () => {
  render(<ContactSection />)
  expect(screen.getByRole('region', { name: 'Vamos resolver algo que importa?' })).toBeInTheDocument()
  expect(screen.getByText('Contato em breve')).toBeInTheDocument()
  expect(screen.queryByRole('link')).not.toBeInTheDocument()
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})
