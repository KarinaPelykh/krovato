import clsx from 'clsx'

type CardImage = {
  isAltView?: boolean
  image: string
}

export const CardImage = ({ image, isAltView }: CardImage) => {
  return (
    <img
      src={image}
      alt='furniture'
      className={clsx(
        'h-[220px] w-full rounded-xs mb-5 cursor-pointer hover:shadow-4xl object-cover',
        isAltView && 'desktop:w-[260px]'
      )}
    />
  )
}
