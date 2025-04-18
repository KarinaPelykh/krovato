import clsx from 'clsx'
import { Icon } from '../Icon'

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
      <p className='text-m desktop:text-xs'>{size}</p>
      <p
        className={clsx(
          ' text-xl',
          isAltView && 'text-ms font-semibold w-0 min-w-[260px]'
        )}>
        {title}
      </p>
      <p className='flex gap-[5px]'>
        <Icon name='check' />
        {isAvailable}
      </p>
    </>
  )
}
