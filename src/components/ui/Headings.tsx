import clsx from 'clsx'
import { ReactNode } from 'react'

type VarietyTitle = 'h1' | 'h2' | 'h3'

type HeadingsProps = {
  as?: keyof JSX.IntrinsicElements | VarietyTitle
  children: ReactNode
  className?: string
}
export const Headings = ({
  as: Title = 'h2',
  children,
  className
}: HeadingsProps) => (
  <Title
    className={clsx(
      'text-1xl text-black font-semibold desktop:text-2xl',
      className
    )}>
    {children}
  </Title>
)
