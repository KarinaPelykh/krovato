import { Button, Icon } from '../ui'

export const ProductsSection = () => {
  return (
    <section className='desktop:pb-18'>
      <div className='container'>
        <h1 className='text-black text-1xl mb-10 flex items-center font-semibold desktop:text-2xl'>
          Ліжка
          <span className='ml-2.5 text-gray-light text-ms font-semibold'>
            1 147 товарів
          </span>
        </h1>

        <ul
          className='grid justify-center grid-cols-2 grid-rows-5 gap-2.5 desktop:grid-cols-5
            desktop:grid-rows-2 mb-5'>
          {[...Array(10)].map(i => (
            <li
              className='p-5 relative bg-white rounded-lg min-h-[130px] tablet:w-[240px] tablet:h-[180px]'
              key={i}>
              <div
                className="before:content-[''] before:w-5 absolute top-0 left-[45%] flex before:h-[5px]
                  before:bg-yellow before:rounded-sm"
              />
              <p className='text-black text-base text-center'>
                Односпальні ліжка
              </p>
              <div className='absolute top-0 left-0'>
                <img
                  src='/bed.png'
                  className='h-full object-cover tablet:w-[240px] tablet:h-[180px]'
                />
              </div>
            </li>
          ))}
        </ul>
        <Button className='font-semibold mx-auto !w-fit !bg-transparent text-yellow'>
          Приховати підкатегорії
          <Icon
            name='double-up'
            className='ml-2.5'
          />
        </Button>
      </div>
    </section>
  )
}
