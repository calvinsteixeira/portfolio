import { render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import { ExpertiseSection } from './expertise-section'

it('preserva o contrato acessível de ExpertiseSection', () => {
  render(<ExpertiseSection />)
  const skills = screen.getByRole('list', { name: 'Conhecimentos' })
  expect(screen.getByText('Stack de domínio')).toBeInTheDocument()
  expect(within(skills).getByText('TypeScript')).toBeInTheDocument()
  const aiSkills = screen.getByRole('list', { name: 'IA no fluxo de desenvolvimento' })
  expect(within(aiSkills).getByText('IDEs com agentes integrados')).toBeInTheDocument()
  expect(within(aiSkills).getByText('Fluxos agênticos de desenvolvimento')).toBeInTheDocument()
  expect(screen.getByText(/contexto, decisões, trade-offs e resultados/)).toBeInTheDocument()
})
