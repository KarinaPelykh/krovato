import { Icon } from '../ui'

export const Payment = () => (
  <div className='bg-white p-[27px] mb-[5px]'>
    <p className='mb-[30px] flex gap-[15px] text-lg items-center'>
      <Icon
        name='pay'
        className='size-[60px]'
      />
      Вибір способу оплати
    </p>
    <ul className='flex flex-col gap-5'>
      <li className='flex gap-2.5'>
        <input type='radio' />
        <p>Готівкою при отриманні (Післясплата)</p>
      </li>
      <li className='flex gap-2.5'>
        <input type='radio' />
        <p>Оплата карткою на сайті</p>
        <Icon
          name='mastercard'
          className='w-12 h-8'
        />
        <Icon
          name='visa'
          className='w-12 h-8'
        />
      </li>
      <li className='flex gap-2.5'>
        <input type='radio' />
        <p>Privat Pay</p>{' '}
        <Icon
          name='private-pay'
          className='w-12 h-8'
        />
      </li>
      <li className='flex gap-2.5'>
        <input type='radio' />
        <p>Кредит від Krovato</p>
      </li>
      <li className='flex gap-2.5'>
        <input type='radio' />
        <p>Оплата частинами ПриватБанк</p>
        <Icon
          name='private-credit'
          className='w-12 h-8'
        />
      </li>
      <li className='flex gap-2.5'>
        <input type='radio' />
        <p>Оплата частинами МоноБанк</p>{' '}
        <Icon
          name='mono-bank'
          className='w-12 h-8'
        />
      </li>
    </ul>
  </div>
)
