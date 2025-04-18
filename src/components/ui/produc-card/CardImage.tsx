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
        `w-[370px] h-[220px] desktop:w-full rounded-xs mb-5 cursor-pointer
        hover:shadow-4xl`,
        isAltView && '!w-full desktop:!w-[260px]'
      )}
    />
  )
}
