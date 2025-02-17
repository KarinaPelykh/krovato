import { Icon } from '../ui'

export const CustomerForm = () => (
  <form>
    <p className='mb-[30px] flex gap-[15px] text-lg items-center'>
      <Icon
        name='info'
        className='size-[60px]'
      />
      Інформація про покупця
    </p>
    <label className='desktop:flex desktop:gap-[30px] mb-5'>
      <input
        type='text'
        placeholder='Прізвище'
        className='bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5
          w-full mb-5 placeholder:text-gray'
      />
      <input
        type='text'
        placeholder='Контактний телефон'
        className='bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5
          w-full mb-5 placeholder:text-gray'
      />
    </label>
    <label className='desktop:flex desktop:gap-[30px] mb-5'>
      <input
        type='text'
        placeholder='Ім’я'
        className='bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5
          w-full mb-5 placeholder:text-gray'
      />
      <input
        type='text'
        placeholder='E-mail'
        className='bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5
          w-full mb-5 placeholder:text-gray'
      />
    </label>
    <input
      type='text'
      placeholder='По батькові'
      className='bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5
        w-full mb-5 placeholder:text-gray'
    />
    <div className='flex gap-2.5 items-center'>
      <input
        type='checkbox'
        className='size-6'
      />
      <p className='text-gray'>Отримуватиме замовлення інша людина</p>
    </div>
  </form>
)
