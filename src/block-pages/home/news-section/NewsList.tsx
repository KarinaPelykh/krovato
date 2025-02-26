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
      <ul className='flex gap-10 flex-wrap desktop:flex-nowrap mb-5 desktop:mb-0'>
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
