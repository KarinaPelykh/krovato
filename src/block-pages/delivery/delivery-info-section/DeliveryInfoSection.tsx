import clsx from 'clsx'
import { DeliveryInfoList } from './DeliveryInfoList'
import { DeliveryBgBlock } from './DeliveryBgBlock'
import { Headings } from '../../../components/ui/Headings'

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
}: DeliveryInfoSectionProps) => (
  <section
    className={clsx('pb-17desktop:pb-18', bgClassName ? bgClassName : '')}>
    <div className='container'>
      <div className='desktop:flex desktop:justify-between'>
        <div className='mb-10 desktop:w-[520px]'>
          <Headings className='mb-10'>{title}</Headings>
          <DeliveryInfoList list={list} />
          <p className='mb-[30px] text-xl font-semibold'>{text}</p>
          <p className='text-xl font-semibold'>{description}</p>
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
          'mt-[104px] ',
          textClassName ? textClassName : 'hidden'
        )}>
        {info}
      </p>
    </div>
  </section>
)
