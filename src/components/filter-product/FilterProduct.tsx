import { Button, Icon } from '../ui'
import { HeadingFilter } from './HedingFilter'
import { ItemFilter } from './ItemFillter'

export const FilterProduct = () => {
  const enterprisers = [
    ' Corners',
    'Estella',
    '     Green Line',
    '  Legko',
    '     MiroMark',
    'Novelty',
    'Soft-line',
    ' Venger',
    'Арбор Древ',
    'Городок мебель'
  ]

  const typeOfBed = [
    " Без узголов'я",
    "З узголів'ям",
    ' Двоярусні',
    'Розкладачки',
    '    Шафи'
  ]

  const sizeOfBed = [
    ' 200x210 см',
    '200x200 см',
    '180x200 см',
    ' 160x200 см',
    '110x190 см',
    '160x190 см',
    '150x200 см',
    ' 140x200 см',
    '140x190 см',
    ' 120x200 см'
  ]

  return (
    <div
      className='mb-10 desktop:mb-0 tablet:w-[300px] border border-t-0 border-gray-light
        rounded-lg h-fit'>
      <div>
        <div
          className='flex items-center gap-2.5 bg-white p-5 border border-x-0 border-gray-light
            rounded-t-lg'>
          <Icon
            className='mr-4'
            name='filter'
          />
          <span className='font-semibold text-ms'>Фільтр пошуку</span>
        </div>
        <HeadingFilter title='Ціна, грн' />
        <div className='bg-white p-5'>
          <div className='flex justify-between items-center'>
            <span className='py-2 px-4 w-fit rounded-lg border border-gray'>
              0
            </span>
            <span className='py-2 px-4 w-fit rounded-lg border border-gray'>
              0
            </span>

            <Button
              buttonClassName='py-2 px-4 !w-fit'
              iconClassName='hidden'>
              OK
            </Button>
          </div>
          <input
            type='range'
            min='16'
            max='96'
            className='mt-4 w-full'
          />
        </div>
      </div>

      <div>
        <HeadingFilter title='Наявність' />
        <div className='bg-white p-5 flex flex-col'>
          {['В наявності', ' Під замовлення'].map((item, i) => (
            <ItemFilter
              key={i}
              item={item}
            />
          ))}
        </div>
      </div>

      <div>
        <HeadingFilter title='Виробник' />
        <div className='bg-white p-5 flex flex-col'>
          {enterprisers.map((item, i) => (
            <ItemFilter
              key={i}
              item={item}
            />
          ))}

          <Button
            buttonClassName='text-yellow !bg-transparent text-start !w-fit'
            iconClassName='hidden'>
            Показати всі
          </Button>
        </div>
      </div>

      <div>
        <HeadingFilter title='Тип ліжка' />
        <div className='bg-white p-5 flex flex-col'>
          {typeOfBed.map((item, i) => (
            <ItemFilter
              key={i}
              item={item}
            />
          ))}
        </div>
      </div>

      <div>
        <HeadingFilter
          title='Розмір спального місця'
          textClassName='block tablet:w-[234px]'
          iconClassName='mr-2.5'
        />
        <div className='bg-white p-5 flex flex-col'>
          {sizeOfBed.map((item, i) => (
            <ItemFilter
              key={i}
              item={item}
            />
          ))}
          <Button
            buttonClassName='text-yellow !bg-transparent text-start !w-fit '
            iconClassName='hidden'>
            Показати всі
          </Button>
        </div>
      </div>
      <HeadingFilter
        textClassName='block tablet:w-[234px]'
        title='Ширина спального місця'
        isBorder={true}
        iconClassName='mr-2.5'
      />
      <HeadingFilter
        textClassName=' block tablet:w-[234px]'
        title='Довжина спального місця'
        isBorder={true}
        iconClassName='mr-2.5'
      />
      <HeadingFilter
        textClassName=' block tablet:w-[234px]'
        title='Форма'
        isBorder={true}
        iconClassName='mr-2.5'
      />

      <HeadingFilter
        textClassName='block tablet:w-[234px]'
        title='Матеріал корпусу'
        isBorder={true}
        iconClassName='mr-2.5'
      />

      <HeadingFilter
        textClassName='block tablet:w-[234px] '
        title='Основа для матраца'
        isBorder={true}
        iconClassName='mr-2.5'
      />
    </div>
  )
}
