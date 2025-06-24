import { PropsWithChildren } from 'react'

type CardPriceProps = {
  price: string
  sale: string | null
}
export const CardPrice = ({
  price,
  sale,
  children
}: PropsWithChildren & CardPriceProps) => {
  return (
    <div className='flex items-center justify-between'>
      <p className='flex flex-col text-lg desktop:text-xl'>
        <span className='inline-block !text-red text-m line-through'>
          {sale ?? ''}
        </span>
        {price}
      </p>
      {children}
    </div>
  )
}
