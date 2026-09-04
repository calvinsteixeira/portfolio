import { render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'
import { SiteFooter } from './site-footer'

it('preserva o contrato acessível de SiteFooter', () => {
  render(<SiteFooter year={2030} />)
  expect(screen.getByRole('contentinfo')).toHaveTextContent('© 2030 Calvin Teixeira')
    expect(screen.getByRole('link', { name: 'Voltar ao topo' })).toHaveAttribute('href', '#cabecalho')
})
