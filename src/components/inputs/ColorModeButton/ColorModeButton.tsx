/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PropsWithChildren } from 'react'
import { useColorMode } from 'theme-ui'

export default function ColorModeButton(props: PropsWithChildren<any>) {
  const [colorMode, setColorMode] = useColorMode()

  return (
    <button
      {...props}
      sx={{
        variant: 'buttons.primary',
        position: 'fixed',
        bottom: 3,
        right: 3,
      }}
      onClick={() => {
        setColorMode(colorMode === 'default' ? 'light' : 'default')
      }}
    >
      {colorMode === 'default' ? 'Light' : 'Dark'}
    </button>
  )
}
