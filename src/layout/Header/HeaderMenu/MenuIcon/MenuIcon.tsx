/** @jsx jsx */
import React from 'react'
import { jsx, MenuButton, Close } from 'theme-ui'

interface Props {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MenuIcon({ isOpen, setIsOpen }: Props) {
  return (
    <React.Fragment>
      {!isOpen ? (
        <MenuButton
          sx={{ variant: 'buttons.menuBurguer' }}
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <Close
          sx={{ variant: 'buttons.menuClose' }}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
    </React.Fragment>
  )
}
