import { Button, Icon } from '../ui'

export const DeliverySelection = () => (
  <div className='bg-white p-[27px] mb-[5px]'>
    <p className='mb-[30px] flex gap-[15px] text-lg items-center'>
      <Icon
        name='delivery'
        className='size-[60px]'
      />
      Вибір способу доставки
    </p>
    <ul className='desktop:flex desktop:gap-[25px] mb-[30px]'>
      <li>
        <Button
          buttonClassName='!bg-transparent !p-5 !text-black flex-col-reverse !gap-0 border-[5px] border-white-light'
          iconName='success'
          iconClassName='size-10'>
          <span className='text-gray'>Бесплатно</span>
          <span>Самовивіз із магазину </span>
        </Button>
      </li>
      <li>
        <Button
          buttonClassName='!bg-transparent !p-5 !text-black flex-col-reverse !gap-0 border-[5px] border-white-light'
          iconName='new-post'
          iconClassName='size-10'>
          <span className='text-gray'>≈ від 500 грн</span>
          <span>Доставка Нова Пошта</span>
        </Button>
      </li>
      <li>
        <Button
          buttonClassName='!bg-transparent !p-5 !text-black flex-col-reverse !gap-0 border-[5px] border-white-light'
          iconName='courier'
          iconClassName='size-10'>
          <span className='text-gray'>≈ від 200 грн</span>
          <span>Доставка кур'єром</span>
        </Button>
      </li>
    </ul>
    <div className='flex justify-between items-center bg-white-light p-5 rounded-lg'>
      <Icon
        name='destination'
        className='!size-10'
      />
      <div>
        <p>Графік роботи: щодня з 9:00 до 18:00</p>
        <p className='text-xl'>м. Київ, пров. Ізяславський 52, пов. 2</p>
      </div>
      <Button
        buttonClassName='  !w-fit'
        iconName='map'
        iconClassName='!size-6'>
        На мапі
      </Button>
    </div>
  </div>
)
