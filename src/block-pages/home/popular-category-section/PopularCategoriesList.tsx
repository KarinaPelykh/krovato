import { CategoryItem } from './CategoryItem'

export const PopularCategoriesList = () => {
  const list = [...Array(10)]

  return (
    <ul
      className='grid justify-center grid-cols-2 tablet:grid-cols-3 gap-3 desktop:grid-rows-2
        desktop:grid-cols-5 desktop:gap-x-2.5 desktop:gap-y-6'>
      {list.map((_, i) => (
        <CategoryItem key={i} />
      ))}
    </ul>
  )
}
