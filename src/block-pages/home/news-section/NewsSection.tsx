import { NewsList } from './NewsList'
import { useTranslation } from 'react-i18next'
import { Button, Icon, Link } from '../../../components'
import { Headings } from '../../../components/ui/Headings'

export const NewsSection = () => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.news-section'
  })

  return (
    <section className='py-17 desktop:py-18'>
      <div className='container'>
        <div className='desktop:flex mb-10 desktop:gap-[30px] desktop:items-center'>
          <Headings>{t('title')}</Headings>
          <Link
            to='/blog'
            linkClassName='hidden desktop:flex '>
            {t('linkBlog')}
          </Link>
          <div className='hidden desktop:flex ml-auto'>
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

        <NewsList />
      </div>
    </section>
  )
}
