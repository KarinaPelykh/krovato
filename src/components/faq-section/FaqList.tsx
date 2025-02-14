import { useState } from 'react'
import { Icon } from '../ui'
import clsx from 'clsx'

type FaqListProps = {
  question: string
  answer: string
}

export const FaqList = ({ question, answer }: FaqListProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handelToggleQuestion = () => {
    setIsOpen(!isOpen)
  }
  return (
    <li
      className={clsx(
        `p-[15px] bg-white w-full rounded-lg shadow-1xl transition-all overflow-hidden
        max-h-[70px] duration-300 ease-linear`,
        isOpen ? 'border-2 border-yellow max-h-screen' : 'max-h-[70px]'
      )}
      onClick={handelToggleQuestion}>
      <div className='flex justify-between'>
        <div className='flex gap-2.5'>
          <Icon
            name='question'
            className='size-10'
          />
          <p className='text-ms font-semibold'>{question}</p>
        </div>
        <Icon
          name='select'
          className={clsx(
            'transition-all duration-300 ease-linear ',
            isOpen ? 'rotate-0' : 'rotate-180'
          )}
        />
      </div>
      <div className='overflow-hidden'>
        <p
          className={clsx(
            'mt-2.5 transition-all duration-300 ease-linear ',
            isOpen ? 'translate-y-0 ' : '-translate-y-full opacity-0'
          )}>
          {answer}
        </p>
      </div>
    </li>
  )
}
