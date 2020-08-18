/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PropsWithChildren } from 'react'
import { useColorMode } from 'theme-ui'

export default function ColorModeButton(props: PropsWithChildren<any>) {
  const [mode, setMode] = useColorMode<string>()

  enum ColorMode {
    NIGHT = 'night',
    LIGHT = 'light',
    DARK = 'dark',
  }

  const { NIGHT, LIGHT, DARK } = ColorMode

  const modes: ColorMode[] = [DARK, LIGHT, NIGHT]

  const colorSelector = () => {
    if (mode === DARK) {
      return 'Light'
    } else if (mode === LIGHT) {
      return 'Night'
    } else {
      return 'Dark'
    }
  }

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
        const index = modes.indexOf(mode as ColorMode)
        const next = modes[(index + 1) % modes.length]
        setMode(next)
      }}
    >
      {colorSelector()}
    </button>
  )
}
