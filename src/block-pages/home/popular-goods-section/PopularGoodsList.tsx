import { useTranslation } from 'react-i18next'
import { Button } from '../../../components'
import { useAppDispatch, useAppSelector } from '../../../hook/hooks'
import { useEffect } from 'react'
import { productSelector } from '../../../redux/selector'
import { addProductToBasketThunk, getProduct } from '../../../redux/operation'
import { ProductCard } from '../../../components/ui/produc-card/ProductCad'
import { toast } from 'react-toastify'

export const PopularGoodList = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.popular-goods-section'
  })

  const products = useAppSelector(productSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getProduct())
  }, [dispatch])

  const findExactProduct = (id: string) => {
    return products.find(({ _id }) => _id === id)
  }

  const addToBasket = (id: string) => {
    const product = findExactProduct(id)

    dispatch(addProductToBasketThunk(product))
      .then(() =>
        toast.success('Add Product to Basket', {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark'
        })
      )
      .catch(error =>
        toast.error(`${error.message}`, {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark'
        })
      )
  }

  return (
    <>
      <ul
        className='grid justify-center mb-[30px] desktop:mb-0 tablet:grid-cols-2 gap-3
          desktop:grid-rows-2 desktop:grid-cols-4 desktop:gap-[30px]'>
        {products
          .slice(0, 8)
          .map(({ _id, image, isAvailable, price, sale, size, title }) => (
            <ProductCard
              key={_id}
              image={image}
              size={size}
              title={title}
              isAvailable={isAvailable}
              price={price}
              sale={sale}
              id={_id}
              addToBasket={addToBasket}
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
