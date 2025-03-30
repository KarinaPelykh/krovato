import { useAppSelector } from '../../hook/hooks'
import { productSelector } from '../../redux/selector'
import { Button } from '../ui'
import { ProductCard } from '../ui/produc-card/ProductCad'

export const ProductsList = () => {
  const products = useAppSelector(productSelector)

  return (
    <>
      <ul
        className='grid justify-center tablet:grid-cols-2 tablet:gap-5 desktop:flex-row
          desktop:grid-cols-3 gap-2.5 flex-wrap mb-10'>
        {products?.map(product => (
          <ProductCard
            key={product._id}
            product={product}
            itemClassName='w-fit'
            imgClassName='w-full desktop:!w-[260px]'
            iconClassName='size-[50px]'
            subTitleClassName='text-ms font-semibold w-0 min-w-[260px]'
          />
        ))}
      </ul>
      <Button
        buttonClassName='mx-auto font-semibold desktop:w-[300px]'
        iconName='reload'
        iconClassName='!size-6'>
        Показати ще відгуки
      </Button>
    </>
  )
}
