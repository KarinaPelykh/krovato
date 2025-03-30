import clsx from 'clsx'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Link } from '../Link'
import { useAppDispatch, useAppSelector } from '../../../hook/hooks'
import { productSelector } from '../../../redux/selector'
import {
  addProductInFavoriteThunk,
  addProductToBasketThunk
} from '../../../redux/operation'
import { Product } from '../../../redux/type'
import { toast } from 'react-toastify'

type ProductCardProps = {
  product: Product

  itemClassName?: string
  imgClassName?: string
  iconClassName?: string
  subTitleClassName?: string
}

export const ProductCard = ({
  product,
  itemClassName,
  imgClassName,
  iconClassName,
  subTitleClassName
}: ProductCardProps) => {
  const { image, size, title, isAvailable, sale, price, _id } = product

  const productsAll = useAppSelector(productSelector)

  const dispatch = useAppDispatch()

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
    <li
      className={clsx(
        `p-5 bg-white h-[488px] rounded-xs shadow-1xl desktop:h-[468px] desktop:w-[300px]
        flex flex-col justify-between`,
        itemClassName && itemClassName
      )}>
      <Link to={`/product/${_id}`}>
        <img
          src={image}
          alt='furniture'
          className={clsx(
            `w-[370px] h-[220px] desktop:w-full rounded-xs mb-5 cursor-pointer
            hover:shadow-4xl`,
            imgClassName && imgClassName
          )}
        />
      </Link>

      <p className='text-m desktop:text-xs'>{size}</p>
      <p className={clsx(' text-xl', subTitleClassName && subTitleClassName)}>
        {title}
      </p>
      <p className='flex gap-[5px]'>
        <Icon name='check' />
        {isAvailable}
      </p>
      <div className='flex items-center justify-between'>
        <p className='flex flex-col text-xl h-[50px]'>
          <span className='inline-block !text-red text-m line-through'>
            {sale && sale}
          </span>
          {price}
        </p>
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
      </div>
    </li>
  )
}
