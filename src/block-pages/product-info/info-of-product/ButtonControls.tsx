import { Button } from '../../../components'

export const ButtonControls = () => (
  <div className='flex flex-col desktop:flex-row desktop:justify-between gap-[30px] items-center'>
    <div
      className='flex justify-center gap-[15px] p-[13px] w-full desktop:w-fit border
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
    <Button
      iconClassName='!size-6'
      iconName='bas'>
      Купити
    </Button>
    <Button
      buttonClassName='!bg-transparent border-2 border-yellow font-semibold !text-nowrap !text-gray '
      iconClassName='!size-6'
      iconName='credit'>
      Купити в кредит
    </Button>
  </div>
)
