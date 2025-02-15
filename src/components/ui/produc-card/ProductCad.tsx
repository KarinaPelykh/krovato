import clsx from 'clsx'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Link } from 'react-router-dom'

type ProductCardProps = {
  size: string
  subTitle: string
  isAvailable: string
  costsWithoutSale: string
  costs: string
  itemClassName?: string
  imgClassName?: string
  iconClassName?: string
  subTitleClassName?: string
  index?: number
}

export const ProductCard = ({
  size,
  subTitle,
  isAvailable,
  costsWithoutSale,
  costs,
  itemClassName,
  imgClassName,
  iconClassName,
  subTitleClassName,
  index
}: ProductCardProps) => (
  <li
    className={clsx(
      'p-5 bg-white h-[488px] rounded-xs shadow-1xl',
      itemClassName && itemClassName
    )}>
    <Link to={`${index}`}>
      <img
        src='/sofa.png'
        alt='furniture'
        className={clsx(
          'w-[370px] h-[220px] desktop:w-full rounded-xs mb-5',
          imgClassName && imgClassName
        )}
      />
    </Link>

    <p className='mb-2.5 text-m desktop:text-xs'>{size}</p>
    <p
      className={clsx(
        'mb-2.5 text-xl',
        subTitleClassName && subTitleClassName
      )}>
      {subTitle}
    </p>
    <p className='mb-2.5 flex gap-[5px]'>
      <Icon name='check' />
      {isAvailable}
    </p>
    <div className='flex items-center justify-between'>
      <p className='flex flex-col text-xl'>
        <span className='inline-block text-red text-m line-through desktop:hidden'>
          {costsWithoutSale}
        </span>
        {costs}
      </p>
      <div className='flex gap-2.5'>
        <Button
          buttonClassName='!bg-transparent !p-0'
          iconName='obrane'
          iconClassName={clsx('!size-[70px]', iconClassName && iconClassName)}
        />

        <Button
          buttonClassName='!bg-transparent !p-0'
          iconName='korzina'
          iconClassName={clsx('!size-[70px]', iconClassName && iconClassName)}
        />
      </div>
    </div>
  </li>
)
