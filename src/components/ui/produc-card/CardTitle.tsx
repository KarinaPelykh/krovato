import clsx from 'clsx'

type CardInfoProps = {
  isAltView?: boolean
  titleClassName?: string
  title: string
}

export const CardTitle = ({
  title,
  isAltView,
  titleClassName
}: CardInfoProps) => {
  return (
    <p
      className={clsx(
        'text-xl mb-2.5 h-[52px] overflow-hidden',
        isAltView && 'text-ms font-semibold w-0 min-w-[260px]',
        titleClassName
      )}>
      {title}
    </p>
  )
}
