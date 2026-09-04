import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Home from './page'

it('conecta todos os atalhos a destinos existentes e únicos', () => {
  render(<Home />)
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo')
  for (const link of screen.getAllByRole('link')) {
    const href = link.getAttribute('href')
    expect(href).toMatch(/^#/)
    expect(document.querySelectorAll(href!)).toHaveLength(1)
  }
})
