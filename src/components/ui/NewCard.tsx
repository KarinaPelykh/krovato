import { Headings } from './Headings'
import { Icon } from './Icon'

export const NewCard = () => (
  <li
    className='desktop:h-[454px] overflow-hidden border-x-gray-light group border-b-gray-light
      border-t-0 border-t-transparent border rounded-xs shadow-1xl w-[calc((100% -
      30px)/3)]'>
    <img
      src='/furniture.webp'
      alt='news'
      className='rounded-xs transition-all ease-in-out duration-500 desktop:group-hover:h-[454px]
        desktop:w-[410px] desktop:h-[270px] h-auto w-full object-cover block
        mobile:h-[270px]'
    />

    <div className='transition-all duration-500 ease-in-out rounded-xs rounded-t-none p-[30px]'>
      <Headings
        as='h3'
        className='!text-lg mb-[30px]'>
        Стільці для вітальні. Як правильно вибрати?
      </Headings>
      <p className='text-yellow text-ms flex gap-2.5 items-center'>
        Детальніше
        <Icon
          className='fill-yellow'
          name='arrow-1'
        />
      </p>
    </div>
  </li>
)
