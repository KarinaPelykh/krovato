import clsx from 'clsx'
import { Button, Icon } from '../../../ui'
import { useTranslation } from 'react-i18next'
import { ReactNode } from 'react'

type Contact = {
  children?: ReactNode
  isOpen?: boolean
  close?: () => void
}

export const Contact = ({ children, isOpen, close }: Contact) => {
  const { t, i18n } = useTranslation('translation', {
    keyPrefix: 'HomePage.header'
  })

  return (
    <div
      className={clsx(
        'flex gap-2.5',
        isOpen &&
          `py-5 px-2 absolute top-0 right-0 desktop:-top-10 desktop:-left-2 bg-white
          rounded-xs cursor-pointer justify-center shadow-1xl flex items-start gap-2.5
          w-[250px]`
      )}>
      <Icon
        className='size-[50px]'
        name='tel'
      />

      <div
        className={clsx(
          'items-center hidden desktop:flex',
          isOpen && 'items-start !flex '
        )}>
        <div>
          <span
            className={clsx(
              'block ',
              i18n.language === 'en' ? 'text-s' : 'text-xs'
            )}>
            {t('schedule')}
          </span>
          <p className='text-xl text-dark'>067 929-45-45</p>
          {children}
        </div>
        <Button
          buttonClassName='!bg-transparent !p-0 !w-fit  !gap-0 mb-auto'
          iconClassName='!size-6 !rotate-180'
          iconName={isOpen ? 'close' : 'select'}
          onClick={close}
        />
      </div>
    </div>
  )
}
