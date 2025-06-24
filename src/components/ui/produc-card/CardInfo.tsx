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
      <p className='text-m mb-2.5 desktop:text-xs text-gray'>{size}</p>
      <p
        className={clsx(
          ' text-xl mb-2.5',
          isAltView && 'text-ms font-semibold w-0 min-w-[260px]'
        )}>
        {title}
      </p>
      <div className='flex items-center gap-[5px] mb-5 text-[13px] font-light'>
        <Icon name='check' />
        {isAvailable}
      </div>
    </>
  )
}
