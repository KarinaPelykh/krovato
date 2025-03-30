import clsx from 'clsx'
import { ReactNode } from 'react'
import { Icon } from './Icon'

type ButtonProps = {
  children?: ReactNode
  onClick?: () => void
  type?: 'submit' | 'reset' | 'button' | undefined
  buttonClassName?: string
  iconName?: string
  iconClassName?: string
  variant?: string
}

export const Button = ({
  children,
  buttonClassName,
  iconName = 'arrow-1',
  iconClassName,
  onClick,
  type = 'button',
  variant
}: ButtonProps) => (
  <button
    className={clsx(
      ' flex justify-center items-center group ',
      buttonClassName,
      variant === 'base' &&
        `bg-yellow flex gap-[15px] p-[13px] justify-center w-full items-center text-white
        text-ms rounded-xs group`,
      variant === 'secondary' &&
        'hover:shadow-5xl rounded-full transition-all active:!bg-black'
    )}
    onClick={onClick}
    type={type}>
    {children}
    <Icon
      className={clsx('size-[50px] active:fill-yellow', iconClassName)}
      name={iconName}
    />
  </button>
)
