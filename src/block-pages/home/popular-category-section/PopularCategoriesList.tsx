import { useEffect } from 'react'
import { CategoryItem } from './CategoryItem'
import { useAppDispatch, useAppSelector } from '../../../hook/hooks'
import { getCategoryOfProduct } from '../../../redux/operation'
import { categoriesSelector } from '../../../redux/selector'

export const PopularCategoriesList = () => {
  const categories = useAppSelector(categoriesSelector)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getCategoryOfProduct())
  }, [dispatch])

  return (
    <ul
      className='grid justify-center grid-cols-2 tablet:grid-cols-3 gap-3 desktop:grid-rows-2
        desktop:grid-cols-5 desktop:gap-x-2.5 desktop:gap-y-6'>
      {categories.map(({ _id, quantity, image, title }) => (
        <li key={_id}>
          <CategoryItem
            quantity={quantity}
            image={image}
            title={title}
            id={_id}
          />
        </li>
      ))}
    </ul>
  )
}
