import { render, screen, within } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SiteHeader } from './site-header'

it('preserva o contrato acessível de SiteHeader', () => {
  render(<SiteHeader />)
  const navigation = screen.getByRole('navigation', { name: 'Navegação principal' })
  expect(within(navigation).getByRole('link', { name: 'Abordagem' })).toHaveAttribute('href', '#abordagem')
  expect(screen.getByRole('link', { name: 'Pular para o conteúdo' })).toHaveAttribute('href', '#conteudo')
})
