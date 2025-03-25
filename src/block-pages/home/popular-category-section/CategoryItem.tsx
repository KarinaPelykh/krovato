// import { useTranslation } from 'react-i18next'
import { Icon, Link } from '../../../components'
type CategoryItemProps = {
  quantity: string
  image: string
  title: string
  id: string
}
export const CategoryItem = ({
  quantity,
  image,
  title,
  id
}: CategoryItemProps) => {
  // const { t } = useTranslation('translation', {
  //   keyPrefix: 'HomePage.categories-section'
  // })

  return (
    <Link
      to={`product/category/${id}`}
      iconClassName='hidden'>
      <div
        className='relative bg-white w-full mobile:w-[180px] h-60 desktop:w-[250px]
          desktop:h-[300px] rounded-xs shadow-xl'>
        <div className='flex justify-between items-center desktop:mb-[60px] p-[15px] desktop:p-5'>
          <span className='text-ms desktop:text-xl text-black'>{title}</span>
          <span className='text-ms desktop:text-xl text-gray-light'>
            {quantity}
          </span>
        </div>
        <div className='bg-white-light rounded-t-full h-20 desktop:h-48'></div>
        <img
          src={image}
          className='absolute top-0 h-60 desktop:top-[11px] desktop:h-[300px]'
        />

        <Icon
          className='size-[50px] absolute right-5 bottom-5'
          name='arrow'
        />
      </div>
    </Link>
  )
}
