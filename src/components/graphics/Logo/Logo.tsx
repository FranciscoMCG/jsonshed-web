/** @jsx jsx */
import React, { PropsWithChildren } from 'react'
import { jsx, Text } from 'theme-ui'

export default function Logo(props: PropsWithChildren<{}>) {
  return (
    <Text {...props} sx={{ variant: 'text.logo' }}>
      JSONSHED
    </Text>
  )
}
