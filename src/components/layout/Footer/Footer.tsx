/** @jsx jsx */
import { jsx } from 'theme-ui'

export default function Footer() {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
      }}
    >
      <span
        sx={{
          fontSize: 1,
          variant: 'text.body',
        }}
      >
        © 2020 Francisco Gomes
      </span>
    </footer>
  )
}
