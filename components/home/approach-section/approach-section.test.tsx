import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ApproachSection } from './approach-section'

it('preserva o contrato acessível de ApproachSection', () => {
  render(<ApproachSection />)
  expect(screen.getByRole('article', { name: 'Começar pelo problema' })).toBeInTheDocument()
  expect(screen.getByRole('article', { name: 'Decidir com clareza' })).toBeInTheDocument()
  expect(screen.getByRole('article', { name: 'Construir para durar' })).toBeInTheDocument()
})
