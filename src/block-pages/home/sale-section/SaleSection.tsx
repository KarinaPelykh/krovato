import { SaleSlider } from './SaleSlider'
import { Button, Link } from '../../../components'
import { useTranslation } from 'react-i18next'
import { Headings } from '../../../components/ui/Headings'

export const SaleSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.sale-section'
  })

  return (
    <section className='pb-17 desktop:pb-18'>
      <div className='container'>
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
          <div className='hidden desktop:flex'>
            <Button
              buttonClassName='mr-[30px] !bg-transparent'
              iconName='arrow-left'
            />
            <Button
              buttonClassName='!bg-transparent '
              iconName='arrow-left'
              iconClassName=' size-[50px] rotate-180'
            />
          </div>
        </div>
        <SaleSlider />
      </div>
    </section>
  )
}
