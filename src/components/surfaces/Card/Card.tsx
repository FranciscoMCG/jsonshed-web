/** @jsx jsx */
import { PropsWithChildren } from 'react'
import { Card as ThemedCard, jsx } from 'theme-ui'

export default function Card(props: PropsWithChildren<any>) {
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
