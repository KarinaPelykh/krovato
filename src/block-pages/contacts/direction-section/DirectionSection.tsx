import { Button, Icon } from '../../../components'

export const DirectionSection = () => {
  return (
    <section className='py-17 desktop:py-18 bg-white'>
      <div className='container'>
        <h2 className='text-black text-1xl font-semibold desktop:text-center mb-10'>
          Як дістатися до нашої виставки «Кровато» від метро:
        </h2>
        <ul
          className='grid gap-[30px] desktop:grid-rows-4 desktop:grid-cols-2 desktop:gap-y-2.5
            desktop:gap-x-[30px] mb-10'>
          <li className='flex gap-2.5 w-full desktop:grow-0 desktop:h-[56px] desktop:shrink-0'>
            <Icon
              name='pointer'
              className='size-8'
            />
            <p className='w-full mobile:min-w-[358px] desktop:w-[565px] text-xl text-black font-semibold'>
              Від ст. м. «Святошино» - маршрутне таксі № 461 виходити на зупинці
              «Путопровід».
            </p>
          </li>
          <li
            className='flex gap-2.5 desktop:row-start-2 desktop:row-end-4 desktop:h-[140px]
              desktop:shrink-0'>
            <Icon
              name='pointer'
              className='size-8'
            />
            <p className='w-full mobile:min-w-[358px] desktop:w-[578px] text-xl text-black font-semibold'>
              Від ст. м. «Академмістечко» — маршрутне таксі № 56, 56Д у напрямку
              Кільцевої дороги, повз завод «Електронмаш», зуп.
              «Литвиненко-Вольгемут», минаючи поворот на Софіївську Борщагівку
              та Вишневе, зупинка одразу за Жулянським мостом, виходити на
              зупинці «Путопровід».
            </p>
          </li>
          <li
            className='flex gap-2.5 desktop:row-start-4 desktop:row-end-5 desktop:h-[84px]
              desktop:shrink-0'>
            <Icon
              name='pointer'
              className='size-8'
            />
            <p className='w-full mobile:min-w-[358px] desktop:w-[578px] text-xl text-black font-semibold'>
              Від ст. м. «Васильківська» — маршрутне таксі № 208, 56Д, 904 у
              напрямку Кільцевої дороги, виходити на зупинці «Путопровід».
            </p>
          </li>
          <li className='flex gap-2.5 desktop:h-[84px] desktop:shrink-0'>
            <Icon
              name='pointer'
              className='size-8'
            />
            <p className='w-full mobile:min-w-[358px] desktop:w-[578px] text-xl text-black font-semibold'>
              Від ст. м (Виставкового центру) — автобус 56 та маршрутне таксі №
              208,499,461,904 у напрямку Кільцевої дороги, виходити на зупинці
              «Путепровід».
            </p>
          </li>
          <li className='flex gap-2.5 desktop:h-[56px] desktop:shrink-0'>
            <Icon
              name='pointer'
              className='size-8'
            />
            <p className='w-full mobile:min-w-[358px] desktop:w-[578px] text-xl text-black font-semibold'>
              Від м.Вишневе, маршрутним таксі 718, виходити на зупинці
              (Путопровід).
            </p>
          </li>
          <li className='flex gap-2.5 desktop:h-[56px] desktop:shrink-0'>
            <Icon
              name='pointer'
              className='size-8'
            />
            <p className='w-full mobile:min-w-[358px] desktop:w-[578px] text-xl text-black font-semibold'>
              Від Севастопольської площі, маршрутне таксі 496, 499, виходити на
              зупинці (Путопровід ).
            </p>
          </li>
        </ul>
        <Button className='p-[13px] items-center tablet:mx-auto tablet:w-[410px]'>
          <Icon name='map' />
          Прокласти маршрут
        </Button>
      </div>
    </section>
  )
}
