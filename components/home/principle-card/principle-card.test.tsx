import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { PrincipleCard } from './principle-card'

it('preserva o contrato acessível de PrincipleCard', () => {
  render(<PrincipleCard principle={{ id: 'teste', number: '04', title: 'Validar hipóteses', description: 'Medir antes de otimizar.', icon: 'problem' }} />)
  expect(screen.getByRole('article', { name: 'Validar hipóteses' })).toHaveTextContent('Medir antes de otimizar.')
})
