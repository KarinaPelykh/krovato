import { Button, Icon } from '../ui'
import { Headings } from '../ui/Headings'

export const PurchaseList = () => (
  <ul>
    <li
      className='flex justify-between items-start first:pt-0 border-[2px] py-[30px] border-x-0
        border-t-0 border-b-gray-light'>
      <div>
        <img
          className='w-[120px] h-[100px ] mb-[15px]'
          src='/sofa.png'
          alt=' sofa product in  basket'
          width={120}
          height={100}
        />
        <div
          className='flex justify-center gap-[15px] py-[17px] px-[25px] w-full desktop:w-fit border
            border-gray-light rounded-lg'>
          <Button
            buttonClassName='!bg-transparent !p-0 !w-fit  !text-gray '
            iconClassName='hidden'>
            -
          </Button>
          <span className='text-black'>1</span>
          <Button
            buttonClassName='!bg-transparent !p-0 !w-fit  !text-gray '
            iconClassName='hidden'>
            +
          </Button>
        </div>
      </div>
      <div className='flex flex-col'>
        <p className='text-gray mb-1'>Розмір: 61 x 184 x 2130 мм</p>
        <Headings
          as='h3'
          className='!text-ms mb-1 !font-semibold'>
          Ліжко Спарта / Sparta з <br /> підйомним механізмом
        </Headings>
        <div className='flex gap-[5px] mb-5'>
          <Icon name='check' />В наявності
        </div>

        <div className='flex items-center flex-col desktop:flex-row'>
          <p className='text-xl font-semibold desktop:mr-[30px]'>15 400 грн</p>
          <p className='text-red font-semibold line-through desktop:mr-auto'>
            25 400 грн
          </p>
        </div>
      </div>
      <Button
        buttonClassName='!bg-transparent !p-0 !w-fit'
        iconName='delete'
        iconClassName='!size-6'
      />
    </li>
  </ul>
)
