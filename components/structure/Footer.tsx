import React from 'react'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="px-5 w-full h-20 primaryContainer flex items-center justify-center">
      <p className='primaryContainerText'>Powered by <strong className='secondaryText'>Calvin.</strong></p>
    </footer>
  )
}