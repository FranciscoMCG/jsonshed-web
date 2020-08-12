/** @jsx jsx */
import { PropsWithChildren } from 'react'
import { jsx, Text } from 'theme-ui'

export default function Logo(props: PropsWithChildren<any>) {
  return <Text {...props}>JSONSHED</Text>
}
