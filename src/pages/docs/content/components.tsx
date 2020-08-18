/** @jsx jsx */
import { PropsWithChildren } from 'react'
import { jsx, Text } from 'theme-ui'


export function Example({children}: PropsWithChildren<any>) {
    return <div sx={{ display: 'table'}}>{children}</div>
}


export function Paragraph({size = 3}: { size?: number}) {
    return <div sx={{ mt: size}}></div>
}

export function ExampleTitle({children, size = 3}: PropsWithChildren<{size?: number}>) {
    return <Text sx={{ mt: size, fontStyle: 'italic'}}>{children}</Text>
}

export function Pre({children}: PropsWithChildren<any>) {
return <span sx={{fontFamily: 'monospace', bg: 'hsla(0, 0%, 30%, .1)'}}>{children}</span>
}

export function Li({children}: PropsWithChildren<any>) {
return <p>- {children}</p>
}
