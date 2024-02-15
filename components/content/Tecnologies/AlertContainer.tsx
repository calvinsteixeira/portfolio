import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Props = {}

export default function AlertContainer({ }: Props) {
  return (
    <Alert className='fixed right-3 top-3 max-w-[80%] secondaryContainer secondaryContainerText'>      
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components and dependencies to your app using the cli.
      </AlertDescription>
    </Alert>
  )
}