import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type Props = {
  title: string,
  description: string,
  type: 'destructive' | 'success'
}

export default function AlertContainer({ title, description, type }: Props) {
  const [visible, setVisible] = React.useState<boolean>(true)

  const alertTypeStyle = type == 'destructive' ? 'bg-red-700 text-white' : 'bg-green-600 text-white'

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setVisible(false)
  //   }, 4000)
  // }, [])

  return (
    <Alert className={`${visible ? 'fixed' : 'hidden'} ${alertTypeStyle} border-transparent right-3 top-3 max-w-[80%] shadow-lg`}>      
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>
        {description}
      </AlertDescription>
    </Alert>
  )
}