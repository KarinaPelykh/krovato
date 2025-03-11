import { Button, Icon } from '../ui'

export const DeliverySelection = () => (
  <div className='bg-white p-[30px] desktop:p-[27px] mb-[5px]'>
    <p className='mb-[30px] flex gap-[15px] text-xl  desktop:text-lg items-center'>
      <Icon
        name='delivery'
        className='!size-10 desktop:!size-[60px]'
      />
      Вибір способу доставки
    </p>
    <ul className='  gap-5  flex flex-col desktop:flex-row  desktop:gap-[25px] mb-[30px]'>
      <li>
        <Button
          buttonClassName='!bg-transparent !p-5 !text-black flex-col-reverse !gap-0 border-[5px] border-white-light'
          iconName='success'
          iconClassName='size-10'>
          <span className='  text-m text-gray'>Бесплатно</span>
          <span className='desktop:text-ms'>Самовивіз із магазину </span>
        </Button>
      </li>
      <li>
        <Button
          buttonClassName='!bg-transparent !p-5 !text-black flex-col-reverse !gap-0 border-[5px] border-white-light'
          iconName='new-post'
          iconClassName='size-10'>
          <span className='text-gray text-m '>≈ від 500 грн</span>
          <span className='desktop:text-ms'>Доставка Нова Пошта</span>
        </Button>
      </li>
      <li>
        <Button
          buttonClassName='!bg-transparent !p-5 !text-black flex-col-reverse !gap-0 border-[5px] border-white-light'
          iconName='courier'
          iconClassName='size-10'>
          <span className='text-gray  text-m'>≈ від 200 грн</span>
          <span className='desktop:text-ms'>Доставка кур'єром</span>
        </Button>
      </li>
    </ul>
    <div className='flex flex-col desktop:flex-row justify-between items-center bg-white-light p-5 rounded-lg'>
      <Icon
        name='destination'
        className='!size-10 mb-5 desktop:m-0'
      />
      <div>
        <p className='mb-2.5 desktop:m-0'>Графік роботи: щодня з 9:00 до 18:00</p>
        <p className='text-xl text-center mb-5 desktop:m-0'>м. Київ, пров. Ізяславський 52, пов. 2</p>
      </div>
      <Button
        buttonClassName='!w-fit !flex-row-reverse desktop:flex-row'
        iconName='map'
        iconClassName='!size-6'>
        На мапі
      </Button>
    </div>
  </div>
)
