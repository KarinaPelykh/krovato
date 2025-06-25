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
          'p-5 bg-white rounded-xs shadow-1xl flex flex-col w-full desktop:h-[468px]',
          itemClassName
        )}>
        {children}
      </li>
    </CardContext.Provider>
  )
}
