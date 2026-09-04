import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { PrincipleCard } from './principle-card'

it('preserva o contrato acessível de PrincipleCard', () => {
  render(<PrincipleCard principle={{ id: 'teste', number: 'approach.principleOneNumber', title: 'approach.principleOneTitle', description: 'approach.principleOneDescription', icon: 'problem' }} />)
  expect(screen.getByRole('article', { name: 'Começar pelo problema' })).toHaveTextContent('Antes da interface ou da stack')
})
