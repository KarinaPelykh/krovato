import { useTranslation } from 'react-i18next'
import { PopularCategoriesList } from './PopularCategoriesList'
import { Headings } from '../../../components/ui/Headings'

export const CategoriesSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.categories-section'
  })

  return (
    <section className='pb-17 desktop:pb-18'>
      <div className='container'>
        <Headings
          as='h1'
          className='mb-10'>
          {t('title')}
        </Headings>
        <PopularCategoriesList />
      </div>
    </section>
  )
}
