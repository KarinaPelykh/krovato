import { useTranslation } from 'react-i18next'
import { KrovatoList } from './KrovatoList'

export const KrovatoSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'AboutAsPage.krovato-section'
  })

  return (
    <section className='pb-17'>
      <div className='container'>
        <h2 className='mb-5 text-2xl font-semibold text-black text-center'>
          {t('title')}
        </h2>
        <KrovatoList />
      </div>
    </section>
  )
}
