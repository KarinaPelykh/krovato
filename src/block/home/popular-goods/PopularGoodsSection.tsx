import { useTranslation } from 'react-i18next'
import { PopularGoodsList } from './PopularGoodsList'
import { Link } from '../../../components'
import { Headings } from '../../../components/ui/Headings'

export const PopularGoodsSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.popular-goods-section'
  })

  return (
    <section className='pb-17 desktop:pb-18'>
      <div className='container'>
        <div className='desktop:flex mb-10 desktop:gap-[30px] desktop:items-center'>
          <Headings as='h1'>{t('title')}</Headings>
          <Link
            to='/'
            linkClassName='hidden desktop:flex '>
            {t('linkSeeAll')}
          </Link>
        </div>
        <PopularGoodsList />
      </div>
    </section>
  )
}
