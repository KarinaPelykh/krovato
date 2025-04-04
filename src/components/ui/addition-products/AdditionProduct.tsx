import { ProductCard } from '../produc-card/ProductCad'
import { Headings } from '../Headings'
import { useAppSelector } from '../../../hook/hooks'
import { productSelector } from '../../../redux/selector'

type AdditionProductProps = {
  title: string
}

export const AdditionProduct = ({ title }: AdditionProductProps) => {
  const products = useAppSelector(productSelector)

  return (
    <section className='py-17 desktop:py-18'>
      <div className='container'>
        <Headings className='mb-[30px]'>{title}</Headings>
        <ul
          className='grid justify-center tablet:grid-cols-2 gap-5 desktop:flex-row
            desktop:grid-cols-4'>
          {products.slice(0, 4).map(product => (
            <ProductCard
              key={product._id}
              product={product}
              itemClassName='w-fit'
              imgClassName='!w-full desktop:!w-[260px]'
              iconClassName='!size-[50px]'
              subTitleClassName='text-ms font-semibold w-0 min-w-[260px]'
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
