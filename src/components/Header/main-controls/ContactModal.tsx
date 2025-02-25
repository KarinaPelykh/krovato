import clsx from 'clsx'
import { useToggle } from '../../../hook/useToggle'
import { Contact } from './modal-contact/Contact'

type ContactModal = {
  divClassName: string
}

export const ContactModal = ({ divClassName }: ContactModal) => {
  const { close, isOpen, open } = useToggle()

  return (
    <div
      className={clsx(
        'w-full justify-center desktop:m-0 desktop:w-[230px] flex relative cursor-pointer',
        divClassName
      )}>
      <div onClick={open}>
        <Contact />
      </div>
      {isOpen && (
        <Contact
          isOpen={isOpen}
          close={close}>
          <div className='flex justify-center flex-col'>
            <a
              className='text-xl'
              href='tel:+067 929-45-45'>
              050 133-45-45
            </a>
            <a
              className='text-xl'
              href='tel:+067 929-45-45'>
              093 170-75-45
            </a>
            <p className='text-yellow font-semibold text-m'>
              Передзвоніть мені
            </p>
          </div>
        </Contact>
      )}
    </div>
  )
}
