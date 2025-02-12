import clsx from 'clsx'
import { DeliveryInfoList } from './DeliveryInfoList'
import { DeliveryBgBlock } from './DeliveryBgBlock'

type DeliveryInfoSectionProps = {
  title: string
  list: string[]
  text?: string
  description: string
  images: string
  textClassName?: string
  text2?: string
  text3?: string
  info?: string
  bgClassName?: string
}

export const DeliveryInfoSection = ({
  title,
  list,
  text,
  description,
  images,
  textClassName,
  text2,
  text3,
  info,
  bgClassName
}: DeliveryInfoSectionProps) => {
  return (
    <section
      className={clsx('pb-17desktop:pb-18', bgClassName ? bgClassName : '')}>
      <div className='container'>
        <div className='desktop:flex desktop:justify-between'>
          <div className='mb-10 desktop:w-[520px]'>
            <h2 className='text-black font-semibold mb-10 text-1xl'>{title}</h2>
            <DeliveryInfoList list={list} />
            <p className='mb-[30px] text-black text-xl font-semibold'>{text}</p>
            <p className='text-black text-xl font-semibold'>{description}</p>
          </div>
          <DeliveryBgBlock
            images={images}
            bgClassName={bgClassName}
            text2={text2}
            text3={text3}
          />
        </div>
        <p
          className={clsx(
            'text-black text-base mt-[104px] ',
            textClassName ? textClassName : 'hidden'
          )}>
          {info}
        </p>
      </div>
    </section>
  )
}
