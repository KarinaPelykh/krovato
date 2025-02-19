import { useTranslation } from 'react-i18next'
import { Headings } from '../../components/ui/Headings'
import { Icon } from '../../components'
type List = { title: string; text: string }

export const KrovatoSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'AboutAsPage.krovato-section'
  })

  const list = t('krovato-list', {
    returnObjects: true
  }) as List[]

  return (
    <section className='pb-17'>
      <div className='container'>
        <Headings className='mb-5 !text-2xl text-center'>{t('title')}</Headings>
        <ul className='flex flex-col gap-[30px] desktop:flex-row'>
          {list.map(({ text, title }, i) => (
            <li
              className='flex flex-col gap-5 justify-center items-center text-center'
              key={i}>
              <Icon
                isScenery={true}
                name='success'
                className='size-[170px]'
              />
              <Headings
                as='h3'
                className='text-lg'>
                {title}
              </Headings>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
