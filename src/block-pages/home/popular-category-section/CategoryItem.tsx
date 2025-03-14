import { useTranslation } from 'react-i18next'
import { Link, Icon } from '../../../components'

export const CategoryItem = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.categories-section'
  })

  return (
    <Link
      to='product'
      iconClassName='hidden'>
      <li
        className='relative bg-white w-full mobile:w-[180px] h-60 desktop:w-[250px]
          desktop:h-[300px] rounded-xs shadow-xl'>
        <div className='flex justify-between items-center desktop:mb-[60px] p-[15px] desktop:p-5'>
          <span className='text-ms desktop:mr-[126px] desktop:text-xl text-black'>
            {t('category')}
          </span>
          <span className='text-ms desktop:text-xl text-gray-light'>54</span>
        </div>
        <div className='bg-white-light rounded-t-full h-20 desktop:h-48'></div>
        <img
          src='/img.png'
          className='absolute top-0 h-60 desktop:top-[11px] desktop:h-[300px]'
        />

        <Icon
          className='size-[50px] absolute right-5 bottom-5'
          name='arrow'
        />
      </li>
    </Link>
  )
}
