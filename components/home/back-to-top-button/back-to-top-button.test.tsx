import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it } from 'vitest'

import { BackToTopButton } from './back-to-top-button'

it('exibe o retorno ao topo após ultrapassar a altura definida', () => {
  Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
  render(<BackToTopButton />)

  expect(screen.queryByRole('link', { name: 'Voltar ao topo' })).not.toBeInTheDocument()

  Object.defineProperty(window, 'scrollY', { configurable: true, value: 480 })
  fireEvent.scroll(window)
  const button = screen.getByRole('link', { name: 'Voltar ao topo' })

  expect(button).toHaveAttribute('href', '#cabecalho')
  expect(button).toHaveClass('back-to-top--visible')
  expect(button).not.toHaveAttribute('tabindex')
})
