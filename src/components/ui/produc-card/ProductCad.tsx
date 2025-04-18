import clsx from 'clsx'

import { Product } from '../../../redux/type'

import { CardContext } from './context'
import { PropsWithChildren } from 'react'

export type ProductCardProps = {
  product: Product

  itemClassName?: string
  imgClassName?: string
  iconClassName?: string
  subTitleClassName?: string
}

export const Card = ({
  product,
  itemClassName,
  children
}: ProductCardProps & PropsWithChildren) => {
  return (
    <CardContext.Provider value={product}>
      <li
        className={clsx(
          `p-5 bg-white h-[488px] rounded-xs shadow-1xl desktop:h-[468px] desktop:w-[300px]
          flex flex-col justify-between`,
          itemClassName
        )}>
        {children}
      </li>
    </CardContext.Provider>
  )
}
