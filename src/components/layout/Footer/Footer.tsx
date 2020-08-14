/** @jsx jsx */
import { jsx } from 'theme-ui'
import { PropsWithChildren } from 'react'

export default function Footer(props: PropsWithChildren<any>) {
  return (
    <footer
      {...props}
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
