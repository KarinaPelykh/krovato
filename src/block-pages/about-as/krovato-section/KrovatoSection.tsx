import { useTranslation } from 'react-i18next'
import { KrovatoList } from './KrovatoList'
import { Headings } from '../../../components/ui/Headings'

export const KrovatoSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'AboutAsPage.krovato-section'
  })

  return (
    <section className='pb-17'>
      <div className='container'>
        <Headings className='mb-5 !text-2xl text-center'>{t('title')}</Headings>
        <KrovatoList />
      </div>
    </section>
  )
}
