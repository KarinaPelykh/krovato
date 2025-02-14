import { useTranslation } from 'react-i18next'
import { Button, Icon, Link } from '../../../components'
import { NewCard } from '../../../components/ui/NewCard'

export const NewsList = () => {
  const list = [1, 2, 3]

  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.news-section'
  })

  return (
    <>
      <ul className='flex gap-10 flex-wrap desktop:flex-nowrap mb-5 desktop:mb-0'>
        {list.map(i => (
          <Link
            key={i}
            to='/'
            iconClassName='hidden'>
            <NewCard />
          </Link>
        ))}
      </ul>
      <Button className='gap-3 items-center h-[50px] tablet:hidden'>
        <Icon
          className='fill-white'
          name='read'
        />
        {t('linkBlog')}
      </Button>
    </>
  )
}
