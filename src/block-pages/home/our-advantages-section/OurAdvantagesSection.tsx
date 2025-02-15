import { useState } from 'react'

import clsx from 'clsx'
import { OurServicesList } from './OurServicesList'
import { sizeWindow } from '../../../hook/sizeWIndow'
import { useTranslation } from 'react-i18next'
import { Button, Icon } from '../../../components'
import { Headings } from '../../../components/ui/Headings'

type OurAdvantagesSectionProps = {
  className?: string
}

export const OurAdvantagesSection = ({
  className
}: OurAdvantagesSectionProps) => {
  const [isOpen, setOpen] = useState(false)

  const { size } = sizeWindow()

  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.our-advantages-section'
  })

  return (
    <section
      className={clsx(
        'pt-10 desktop:pt-18 bg-white',
        className && 'py-10 desktop:py-18 '
      )}>
      <div className='container'>
        <div className='mx-auto desktop:max-w-[1070px] relative mt-10 desktop:my-[70px]'>
          <Headings className='text-3xl text-start mb-10 desktop:mb-[30px] desktop:text-center'>
            {t('title')}
          </Headings>

          <div
            className={clsx(
              isOpen
                ? 'h-auto'
                : 'overflow-hidden !whitespace-wrap text-ellipsis '
            )}>
            <p className='desktop:mb-5'>
              {t('text_1')}
              {isOpen || size >= 1440 ? <span>{t('text_2')}</span> : '...'}
            </p>
            <div
              className={clsx(
                'absolute z-0 bottom-0 left-0 h-36 w-full',
                isOpen ? 'bg-transparent' : 'bg-md'
              )}></div>

            <Button
              onClick={() => setOpen(!isOpen)}
              buttonClassName={clsx(
                'transition-all duration-300 flex mx-auto !bg-transparent',
                isOpen ? 'rotate-180' : 'rotate-0 '
              )}
              iconName='arrow-down'
              iconClassName=' size-[60px]'
            />
          </div>
        </div>
        <div className={clsx(className)}>
          <OurServicesList />
        </div>
      </div>
    </section>
  )
}
