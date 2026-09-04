import { fireEvent, render, screen } from '@testing-library/react'
import { expect, it, vi } from 'vitest'
import { ActionLink } from './action-link'

it('preserva nome, destino e evento do link', () => {
  const onClick = vi.fn((event) => event.preventDefault())
  render(<ActionLink href='#destino' onClick={onClick}>Consultar abordagem</ActionLink>)
  const link = screen.getByRole('link', { name: 'Consultar abordagem' })
  expect(link).toHaveAttribute('href', '#destino')
  fireEvent.click(link)
  expect(onClick).toHaveBeenCalledOnce()
})

it('mantém a semântica de link na variante outline', () => {
  render(<ActionLink href='#contato' variant='outline'>Conversar</ActionLink>)
  expect(screen.getByRole('link', { name: 'Conversar' })).toHaveAttribute('href', '#contato')
})
