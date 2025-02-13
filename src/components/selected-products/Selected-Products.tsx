import { FilterProduct } from '../filter-product/FilterProduct'
import { Icon } from '../ui'
import { ProductsList } from './ProductsList'

export const SelectedProducts = () => {
  return (
    <section className='py-17 desktop:py-18'>
      <div
        className='container items-center desktop:items-start flex flex-col desktop:flex-row
          desktop:gap-[30px]'>
        <FilterProduct />
        <div className='flex flex-col'>
          <div
            className='flex flex-col gap-2.5 tablet:flex-row tablet:items-center tablet:justify-between
              mb-10'>
            <span className='text-black font-semibold text-ms'>
              Ви вибрали:
            </span>
            <div className='flex gap-2.5 flex-col tablet:flex-row tablet:items-center'>
              <span className='text-black flex gap-2.5 font-semibold text-ms'>
                <Icon name='sort' />
                Сортування:
              </span>
              <select className='bg-transparent'>
                <option>За зростанням ціни</option>
              </select>
            </div>
          </div>
          <ProductsList />
        </div>
      </div>
    </section>
  )
}
