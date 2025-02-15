import { useTranslation } from 'react-i18next'
import { Button } from '../../ui'
import clsx from 'clsx'

type FormProps = {
  className?: string
}

export const Form = ({ className }: FormProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'HomePage.header'
  })

  return (
    <form className={clsx('hidden desktop:flex relative w-fit', className)}>
      <input
        placeholder={t('placeholder')}
        className='outline-none w-full text-base py-2.5 px-[15px] rounded-xs border
          border-gray-light desktop:w-[421px]'
      />

      <Button
        buttonClassName='absolute top-0 right-2.5 !w-fit !bg-transparent'
        iconName='search'
        iconClassName='!size-6'
      />
    </form>
  )
}
