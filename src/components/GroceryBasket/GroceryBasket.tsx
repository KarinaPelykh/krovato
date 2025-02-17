import { Link } from 'react-router-dom'
import { Button, Icon } from '../ui'
import { PurchaseList } from './PurchaseList'

export const GroceryBasket = () => (
  <div className='p-[30px] bg-white rounded-lg h-fit'>
    <div>
      <p className='text-lg mb-10'>
        Ваш кошик <span className='text-yellow'>4</span>
      </p>
      <PurchaseList />
    </div>
    <div
      className='flex justify-between py-[30px] border border-x-0 border-t-0 border-b-gray
        items-center bg-white'>
      <div className='flex gap-2.5'>
        <Icon name='promo' /> <p>Є промокод?</p>
      </div>
      <input
        placeholder='Введіть код'
        className='bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5
          placeholder:text-gray'
      />
      <Button
        buttonClassName='!w-fit'
        iconClassName='hidden'>
        OK
      </Button>
    </div>
    <div className='flex flex-col pt-[30px] bg-white'>
      <p className='text-lg'>Разом:</p>

      <ul className='mb-[30px]'>
        <li className='flex text-sm tablet:text-base items-center py-2.5'>
          <span className='whitespace-nowrap'>4 товари на суму:</span>
          <span className='w-full border-b border-dotted'></span>
          <span className='whitespace-nowrap'>540 269 грн.</span>
        </li>
        <li className='flex text-sm tablet:text-base items-center py-2.5'>
          <span className='whitespace-nowrap'>Вартість доставки:</span>
          <span className='w-full border-b border-dotted'></span>
          <span className='whitespace-nowrap'>За тарифами оператора</span>
        </li>
        <li className='flex text-sm tablet:text-base items-center py-2.5'>
          <span className='whitespace-nowrap'>До оплати:</span>
          <span className='w-full border-b border-dotted'></span>
          <span className='whitespace-nowrap text-lg'>540 269 грн.</span>
        </li>
      </ul>
      <div className='flex gap-2.5 items-center mb-[30px]'>
        <input
          type='checkbox'
          className='size-6'
        />
        <p>Не передзвонюйте мені для підтвердження замовлення</p>
      </div>
      <Button
        buttonClassName='mb-[30px]'
        iconClassName='hidden'>
        ОФОРМИТИ ЗАМОВЛЕННЯ
      </Button>
      <p>
        Підтверджуючи замовлення, я приймаю умови
        <Link
          to='/'
          className='text-yellow'>
          {' '}
          Угоди користувача
        </Link>
      </p>
    </div>
  </div>
)
