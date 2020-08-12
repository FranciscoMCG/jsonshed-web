/** @jsx jsx */
import React from 'react'
import { jsx, MenuButton, Close } from 'theme-ui'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function NavIcons({ isOpen, setIsOpen }: Props) {
  return (
    <React.Fragment>
      {!isOpen ? (
        <MenuButton sx={{ zIndex: 2 }} onClick={() => setIsOpen(!isOpen)} />
      ) : (
        <Close
          sx={{ zIndex: 2, color: 'highlight' }}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </React.Fragment>
  )
}
