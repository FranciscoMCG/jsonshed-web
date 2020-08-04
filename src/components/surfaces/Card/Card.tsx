/** @jsx jsx */
import React, { PropsWithChildren } from 'react'
import { Card as ThemedCard, jsx } from 'theme-ui'

export default function Card(props: PropsWithChildren<{}>) {
  return (
    <ThemedCard
      sx={{
        maxWidth: '90%',
      }}
      {...props}
    >
      {props.children}
    </ThemedCard>
  )
}
