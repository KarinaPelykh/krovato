import clsx from 'clsx'
import { Button } from '../Button'
import { Icon } from '../Icon'

type ProductCardProps = {
  image?: string
  size: string
  title: string
  isAvailable: string

  sale: string | null
  price: string
  itemClassName?: string
  imgClassName?: string
  iconClassName?: string
  subTitleClassName?: string
  index?: string
}

export const ProductCard = ({
  image,
  size,
  title,
  isAvailable,
  price,
  sale,
  itemClassName,
  imgClassName,
  iconClassName,
  subTitleClassName
}: ProductCardProps) => {
  return (
    <li
      className={clsx(
        `p-5 bg-white h-[488px] rounded-xs shadow-1xl desktop:h-[468px] desktop:w-[300px]
        flex flex-col justify-between`,
        itemClassName && itemClassName
      )}>
      {/* <Link to={`${index}`}> */}
      <img
        src={image}
        alt='furniture'
        className={clsx(
          'w-[370px] h-[220px] desktop:w-full rounded-xs mb-5',
          imgClassName && imgClassName
        )}
      />
      {/* </Link> */}

      <p className='text-m desktop:text-xs'>{size}</p>
      <p className={clsx(' text-xl', subTitleClassName && subTitleClassName)}>
        {title}
      </p>
      <p className='flex gap-[5px]'>
        <Icon name='check' />
        {isAvailable}
      </p>
      <div className='flex items-center justify-between'>
        <p className='flex flex-col text-xl h-[50px]'>
          <span className='inline-block !text-red text-m line-through'>
            {sale && sale}
          </span>
          {price}
        </p>
        <div className='flex gap-2.5'>
          <Button
            buttonClassName='!bg-transparent !p-0'
            iconName='obrane'
            iconClassName={clsx(iconClassName && iconClassName)}
          />

          <Button
            buttonClassName='!bg-transparent !p-0'
            iconName='korzina'
            iconClassName={clsx(iconClassName && iconClassName)}
          />
        </div>
      </div>
    </li>
  )
}
