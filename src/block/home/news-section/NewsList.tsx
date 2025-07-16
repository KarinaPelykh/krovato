import { useTranslation } from 'react-i18next'
import { Button } from '../../../components'
import { ItemList } from './ItemList'

export const NewsList = () => {
  const list = [1, 2, 3]

  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.news-section'
  })

  return (
    <>
      <ul className='flex gap-[26px] flex-wrap mb-5 justify-center desktop:flex-nowrap desktop:mb-0'>
        {list.map(i => (
          <ItemList key={i} />
        ))}
      </ul>

      <Button
        buttonClassName='gap-3 items-center h-[50px] tablet:hidden'
        iconName='read'
        iconClassName=' fill-white !size-6'>
        {t('linkBlog')}
      </Button>
    </>
  )
}
