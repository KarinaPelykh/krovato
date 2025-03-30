import { useState } from 'react'
import { Button } from '../ui'
import { Headings } from '../ui/Headings'
import clsx from 'clsx'
import { useAppSelector } from '../../hook/hooks'
import { categoriesSelector } from '../../redux/selector'
import { useParams } from 'react-router-dom'

export const ProductsSection = () => {
  const { id } = useParams()

  const [isHidden, setIsHidden] = useState(false)

  const categories = useAppSelector(categoriesSelector)

  const filterByID = categories.find(category => category._id === id)

  return (
    <section className='desktop:pb-18 relative'>
      <div className='container'>
        <Headings
          as='h1'
          className='mb-10 flex items-center'>
          {filterByID?.title}
          <span className='ml-2.5 text-gray-light text-ms font-semibold'>
            {filterByID?.product.length} товарів
          </span>
        </Headings>
        <div className={clsx(isHidden && 'h-[150px] overflow-hidden')}>
          <ul
            className='grid justify-center grid-cols-2 grid-rows-5 gap-2.5 desktop:grid-cols-5
              desktop:grid-rows-2'>
            {filterByID?.product.map(({ _id, title, image }) => (
              <li
                className='p-5 relative bg-white rounded-lg min-h-[130px] tablet:w-60 tablet:h-[180px]'
                key={_id}>
                <div
                  className="before:content-[''] before:w-5 absolute top-0 left-1/2 -translate-x-1/2 flex
                    before:h-[5px] before:bg-yellow before:rounded-sm"
                />
                <p className='text-center font-semibold leading-normal'>
                  {title}
                </p>
                <div className='absolute top-0 left-0'>
                  <img
                    src={image}
                    className='h-full object-cover tablet:w-60 tablet:h-[180px]'
                  />
                </div>
              </li>
            ))}
          </ul>
          {isHidden ? (
            <div className='bg-md absolute bottom-0 desktop:bottom-10 left-0 w-full h-[100px] z-20' />
          ) : null}

          <Button
            buttonClassName={clsx(
              'font-semibold mx-auto !w-fit left-1/2 !bg-transparent text-yellow absolute  -bottom-10    -translate-x-1/2 desktop:bottom-[20px]  z-30'
            )}
            iconClassName={clsx('!size-6 ml-2.5', isHidden && 'rotate-180')}
            iconName='double-up'
            onClick={() => setIsHidden(!isHidden)}>
            {isHidden ? 'Показати підкатегорії' : 'Приховати підкатегорії'}
          </Button>
        </div>
      </div>
    </section>
  )
}
