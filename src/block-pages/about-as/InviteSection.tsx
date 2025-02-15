import { useTranslation } from 'react-i18next'
import { Button } from '../../components'
import { Headings } from '../../components/ui/Headings'

export const InviteSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'AboutAsPage.initiation-section'
  })

  return (
    <section className='pt-17 desktop:pt-18'>
      <div className='container desktop:flex'>
        <article>
          <Headings className='mb-[30px]'>{t('title')}</Headings>
          <p className='font-semibold mb-5 text-lg'>{t('subtitle')}</p>
          <p className='font-semibold mb-10 text-ms'>{t('description')}</p>

          <Button
            buttonClassName='py-[13px] px-5 mx-auto desktop:m-0'
            iconName='arrow-1'
            iconClassName='ml-2.5 fill-white !size-6'>
            {t('button')}
          </Button>
        </article>
        <img
          src='/img-about-2.png'
          alt='invitation'
          width={480}
          height={330}
          className='flex mx-auto desktop:w-[740px] desktop:h-[506px]'
        />
      </div>
    </section>
  )
}
