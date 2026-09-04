import { render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ExpertiseSection } from './expertise-section'

it('preserva o contrato acessível de ExpertiseSection', () => {
  render(<ExpertiseSection />)
  const skills = screen.getByRole('list', { name: 'Conhecimentos' })
  expect(within(skills).getByText('TypeScript')).toBeInTheDocument()
  expect(screen.getByText(/contexto, decisões, trade-offs e resultados/)).toBeInTheDocument()
})
