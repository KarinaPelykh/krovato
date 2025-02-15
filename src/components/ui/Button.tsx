import clsx from 'clsx'
import { ReactNode } from 'react'
import { Icon } from './Icon'

type ButtonProps = {
  children?: ReactNode
  // className?: string
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button' | undefined
  buttonClassName?: string
  iconName?: string
  iconClassName?: string
}

export const Button = ({
  children,
  buttonClassName,
  iconName = 'arrow-1',
  iconClassName,
  onClick,
  type = 'button'
}: ButtonProps) => (
  <button
    className={clsx(
      `bg-yellow flex gap-[15px] p-[13px] justify-center w-full items-center text-white
      text-ms rounded-xs `,
      buttonClassName
    )}
    onClick={onClick}
    type={type}>
    {children}
    <Icon
      className={clsx('size-[50px]', iconClassName)}
      name={iconName}
    />
  </button>
)
