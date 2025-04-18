import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

import { Button } from '../../../components'

import { useAppDispatch, useAppSelector } from '../../../hook/hooks'

import { productSelector } from '../../../redux/selector'
import { getProduct } from '../../../redux/operation'
import clsx from 'clsx'

import { PopularProductItem } from './PopularProductItem'

export const PopularGoodList = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.popular-goods-section'
  })

  const products = useAppSelector(productSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  return (
    <>
      <ul
        className={clsx(
          `grid justify-center mb-[30px] desktop:mb-0 tablet:grid-cols-2 gap-3
          desktop:grid-rows-2 desktop:grid-cols-4 desktop:gap-[30px]`
        )}>
        {products.slice(0, 8).map(product => (
          <PopularProductItem
            key={product._id}
            product={product}
          />
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
