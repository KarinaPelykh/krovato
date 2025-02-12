import clsx from 'clsx'

type DeliveryBgBlockProps = {
  images: string
  text2?: string
  text3?: string

  bgClassName?: string
}

export const DeliveryBgBlock = ({
  images,
  bgClassName,
  text2,
  text3
}: DeliveryBgBlockProps) => {
  return (
    <div className='relative'>
      <img
        className='w-[410px] h-[414px] desktop:w-full desktop:h-[750px] block'
        src={images}
      />
      <div
        className={clsx(
          `rounded-full absolute bottom-0 left-0 size-[250px] bg-yellow flex items-center
          justify-center flex-col desktop:size-[420px]`,
          bgClassName ? 'top-[240px] desktop:top-[300px]' : ''
        )}>
        <p
          className='text-white font-semibold text-xs text-center w-[200px] desktop:text-lg
            desktop:w-[340px] desktop:mb-5'>
          {text2}
        </p>
        <p className='text-white text-s text-center w-[200px] desktop:text-xl desktop:w-[340px]'>
          {text3}
        </p>

        <div
          className='rounded-full size-[244px] bg-transparent border-[3px] border-white absolute
            left-0 top-0 flex items-center justify-center flex-col desktop:size-[410px]'></div>
      </div>
    </div>
  )
}
