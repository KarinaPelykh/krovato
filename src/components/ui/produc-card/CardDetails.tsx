import clsx from 'clsx'
import { Icon } from '../Icon'
import { ReactNode } from 'react'

type CardInfoProps = {
  children?: ReactNode
  isAvailable?: string
  name?: string
  detailClassName?: string
  iconClassName?: string
}

export const CardDetail = ({
  isAvailable,
  children,
  name = 'check',
  detailClassName,
  iconClassName
}: CardInfoProps) => {
  return (
    <div
      className={clsx(
        'flex items-center gap-[5px] mb-5 text-[13px] font-light',
        detailClassName
      )}>
      {children}
      <Icon
        name={name}
        className={clsx(iconClassName)}
      />
      {isAvailable}
    </div>
  )
}
