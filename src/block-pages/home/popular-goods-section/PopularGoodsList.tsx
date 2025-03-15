import { useTranslation } from 'react-i18next'
import { Button, Link } from '../../../components'
import { PopularGoodItem } from './PopularGoodItem'
import { useAppDispatch, useAppSelector } from '../../../hook/hooks'
import { useEffect } from 'react'
import { productSelector } from '../../../redux/selector'
import { getProduct } from '../../../redux/operation'

export const PopularGoodList = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.popular-goods-section'
  })

  const products = useAppSelector(productSelector)
  console.log(products)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [])

  return (
    <>
      <ul
        className='grid justify-center mb-[30px] desktop:mb-0 tablet:grid-cols-2 gap-3
          desktop:grid-rows-2 desktop:grid-cols-4 desktop:gap-[30px]'>
        {products.slice(0, 8).map(product => (
          <Link
            to={`product/${product._id}`}
            linkClassName='!text-black gap-0 items-center flex'
            iconClassName='hidden'>
            <PopularGoodItem
              key={product._id}
              index={product._id}
              products={product}
            />
          </Link>
        ))}
      </ul>

      <Button
        buttonClassName='h-[50px] tablet:hidden'
        iconName='reload'
        iconClassName='!size-6'>
        {t('showGoods')}
      </Button>
    </>
  )
}
