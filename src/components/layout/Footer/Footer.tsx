/** @jsx jsx */
import { jsx } from 'theme-ui'

interface Props {
  isDocsLayout?: boolean
  isMobile?: boolean
}

export default function Footer({ isDocsLayout, isMobile }: Props) {
  return (
    <footer
      sx={{
        variant: 'layout.footer',
      }}
    >
      <span
        sx={{
          ...(isDocsLayout && {
            ml: '13.5rem',
          }),
          ...(isDocsLayout &&
            isMobile && {
              ml: 0,
            }),
          fontSize: 1,
          variant: 'text.body',
        }}
      >
        © 2020 Francisco Gomes
      </span>
    </footer>
  )
}
