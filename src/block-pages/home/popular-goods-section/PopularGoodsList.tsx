import { useTranslation } from 'react-i18next'
import { Button, Link } from '../../../components'
import { PopularGoodItem } from './PopularGoodItem'

export const PopularGoodList = () => {
  const list = [...Array(8)]

  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.popular-goods-section'
  })

  return (
    <>
      <ul
        className='grid justify-center mb-[30px] desktop:mb-0 tablet:grid-cols-2 gap-3
          desktop:grid-rows-2 desktop:grid-cols-4 desktop:gap-[30px]'>
        {list.map((_, i) => (
     

           <Link to={`product/${i}`} linkClassName='!text-black gap-0 items-center flex' iconClassName='hidden'> 
            <PopularGoodItem
            key={i}
            index={i}
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
