import { useState } from 'react'
import { Button } from '../ui'
import { Headings } from '../ui/Headings'
import clsx from 'clsx'

export const ProductsSection = () => {
  const [isHidden, setIsHidden] = useState(false)

  return (
    <section className='desktop:pb-18 relative'>
      <div className='container overflow-hidden'>
        <Headings
          as='h1'
          className='mb-10 flex items-center'>
          Ліжка
          <span className='ml-2.5 text-gray-light text-ms font-semibold'>
            1 147 товарів
          </span>
        </Headings>
        <div className={clsx(isHidden && 'h-[150px] overflow-hidden')}>
          <ul
            className='grid justify-center grid-cols-2 grid-rows-5 gap-2.5 desktop:grid-cols-5
              desktop:grid-rows-2'>
            {[...Array(10)].map(i => (
              <li
                className='p-5 relative bg-white rounded-lg min-h-[130px] tablet:w-60 tablet:h-[180px]'
                key={i}>
                <div
                  className="before:content-[''] before:w-5 absolute top-0 left-[45%] flex before:h-[5px]
                    before:bg-yellow before:rounded-sm"
                />
                <p className='text-center'>Односпальні ліжка</p>
                <div className='absolute top-0 left-0'>
                  <img
                    src='/bed.png'
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
              'font-semibold mx-auto !w-fit !bg-transparent text-yellow absolute  -bottom-10 tablet:left-[35%] tablet:left-[40%]   desktop:bottom-10 desktop:left-[40%]  z-30',
              !isHidden && '-bottom-[40px]'
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
