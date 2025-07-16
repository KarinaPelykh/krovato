import { CardSize } from './CardSize'
import { CardTitle } from './CardTitle'
import { CardDetail } from './CardDetails'

type CardInfoProps = {
  isAltView?: boolean
  size: string
  title: string
  isAvailable: string
}

export const CardInfo = ({
  size,
  title,
  isAvailable,
  isAltView
}: CardInfoProps) => {
  return (
    <>
      <CardSize size={size} />
      <CardTitle
        title={title}
        isAltView={isAltView}
      />
      <CardDetail isAvailable={isAvailable} />
    </>
  )
}
