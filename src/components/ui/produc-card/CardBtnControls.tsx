import clsx from 'clsx'
import { useAppDispatch, useAppSelector } from '../../../hook/hooks'
import { Button } from '../Button'
import { toast } from 'react-toastify'
import {
  addProductInFavoriteThunk,
  addProductToBasketThunk
} from '../../../redux/operation'
import { productSelector } from '../../../redux/selector'
import { useCardContext } from './context'

type CardBtnControlsProps = {
  iconClassName?: string
}

export const CardBtnControls = ({ iconClassName }: CardBtnControlsProps) => {
  const { _id } = useCardContext()

  const dispatch = useAppDispatch()

  const productsAll = useAppSelector(productSelector)

  const findProductById = productsAll?.find(product => product._id === _id)

  const addToBasket = () => {
    if (!findProductById) {
      return
    }

    dispatch(addProductToBasketThunk(findProductById))
      .then(() =>
        toast.success(`Add Product to basket`, {
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

  const addToFavorite = () => {
    if (!findProductById) return
    dispatch(addProductInFavoriteThunk(findProductById))
      .then(() =>
        toast.success(`Add Product to favorite`, {
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
    <div className='flex gap-2.5'>
      <Button
        onClick={addToFavorite}
        variant='secondary'
        iconName='like'
        buttonClassName='bg-white-light active:hover:shadow-1xl'
        iconClassName={clsx(iconClassName, 'fill-gray-light')}
      />

      <Button
        onClick={addToBasket}
        variant='secondary'
        buttonClassName='bg-yellow hover:!shadow-1xl active:hover:shadow-5xl'
        iconName='korzina'
        iconClassName={clsx(iconClassName, 'fill-white')}
      />
    </div>
  )
}
