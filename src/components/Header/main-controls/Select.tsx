import { useTranslation } from 'react-i18next'
import { Button, Icon } from '../../ui'
import clsx from 'clsx'
import { useToggle } from '../../../hook/useToggle'

export const Select = () => {
  const { t, i18n } = useTranslation('translation', {
    keyPrefix: 'HomePage.header'
  })

  const { close, isOpen, open } = useToggle()

  return (
    <div className='w-[230px] hidden desktop:flex relative'>
      <div
        className={clsx(
          'flex gap-2.5',
          isOpen &&
            `py-5 px-2 absolute -top-10 -left-2 bg-white rounded-xs cursor-pointer
            justify-center shadow-1xl flex items-start gap-2.5 w-[250px]`
        )}>
        <Icon
          className='size-[50px]'
          name='tel'
        />

        <div className={clsx('flex items-center', isOpen && 'items-start')}>
          <div>
            <span
              className={clsx(
                'block ',
                i18n.language === 'en' ? 'text-s' : 'text-xs'
              )}>
              {t('schedule')}
            </span>
            <a
              href='tel:+067 929-45-45'
              className='text-xl text-dark'>
              067 929-45-45
            </a>

            {isOpen && (
              <div>
                <div className='flex justify-center flex-col'>
                  <a
                    className='text-xl text-dark'
                    href='tel:+067 929-45-45'>
                    050 133-45-45
                  </a>
                  <a
                    className='text-xl text-dark'
                    href='tel:+067 929-45-45'>
                    093 170-75-45
                  </a>
                  <p className='text-yellow font-semibold text-m'>
                    Передзвоніть мені
                  </p>
                </div>
              </div>
            )}
          </div>
          <Button
            buttonClassName='!bg-transparent !p-0 !w-fit  !gap-0 '
            iconClassName='!size-6 !rotate-180'
            iconName={isOpen ? 'close' : 'select'}
            onClick={isOpen ? close : open}
          />
        </div>
      </div>
    </div>
  )
}
