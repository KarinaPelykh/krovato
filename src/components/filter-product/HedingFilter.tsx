import clsx from 'clsx'
import { Button } from '../ui'
type HeadingFilterProps = {
  title: string
  wrapperClassName?: string
  iconClassName?: string
  textClassName?: string
  isBorder?: boolean
}
export const HeadingFilter = ({
  title,
  wrapperClassName,
  iconClassName,
  textClassName,
  isBorder
}: HeadingFilterProps) => (
  <div
    className={clsx(
      'flex items-center justify-between p-5',
      wrapperClassName,
      isBorder ? 'border border-x-0 border-b-0 border-t-gray-light ' : ''
    )}>
    <span
      className={clsx(
        ' font-semibold text-ms',
        textClassName && textClassName
      )}>
      {title}
    </span>
    <Button
      buttonClassName='!bg-transparent !p-0    gap-0  !w-fit  
      text-ms rounded-xs'
      iconName='close'
      iconClassName={clsx(' !size-6', iconClassName)}
    />
  </div>
)
