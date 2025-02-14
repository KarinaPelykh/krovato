import { useTranslation } from 'react-i18next'
import { Icon } from '../../../components/ui'
import { Headings } from '../../../components/ui/Headings'
type List = { title: string; text: string }

export const KrovatoList = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'AboutAsPage.krovato-section'
  })

  const list = t('krovato-list', {
    returnObjects: true
  }) as List[]

  return (
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
  )
}
