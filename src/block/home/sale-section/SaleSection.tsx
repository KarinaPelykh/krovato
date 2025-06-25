import { SaleSlider } from './SaleSlider'
import { Link } from '../../../components'
import { useTranslation } from 'react-i18next'
import { Headings } from '../../../components/ui/Headings'

export const SaleSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.sale-section'
  })

  return (
    <section className='pb-17 desktop:pb-18'>
      <div className='container overflow-hidden'>
        <div className='desktop:flex desktop:justify-between mb-10'>
          <div
            className='flex justify-between desktop:justify-start desktop:items-center
              desktop:gap-[30px]'>
            <Headings>{t('title')}</Headings>
            <Link
              to='/'
              linkClassName='hidden desktop:flex '>
              {t('linkForDetails')}
            </Link>
          </div>
        </div>
        <SaleSlider />
      </div>
    </section>
  )
}
