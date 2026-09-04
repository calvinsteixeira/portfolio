import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import Home from './page'

it('conecta todos os atalhos a destinos existentes e únicos', () => {
  render(<Home />)
  expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
  expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo')
  const sectionLinks = screen.getAllByRole('link').filter((link) => link.getAttribute('href')?.startsWith('#'))

  for (const link of sectionLinks) {
    const href = link.getAttribute('href')
    expect(document.querySelectorAll(href!)).toHaveLength(1)
  }

  expect(screen.getByRole('link', { name: 'Vamos conversar no LinkedIn' })).toHaveAttribute(
    'href',
    'https://www.linkedin.com/in/calvinteixeira/',
  )
})
