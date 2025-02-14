import { Button, Link } from '../../../components'
import { Icon } from '../../../components/ui'
import { Headings } from '../../../components/ui/Headings'
import { ReviewForm } from './ReviewForm'
import { ReviewList } from './ReviewList'

export const Reviews = () => (
  <section>
    <div className='container desktop:flex desktop:gap-[30px]'>
      <div className='mb-[60px] desktop:mb-0'>
        <Headings
          as='h1'
          className='text-center desktop:text-start mb-5 desktop:mb-10'>
          Відгуки
        </Headings>

        <Button className='mx-auto gap-[15px] mb-[60px] p-[13px] font-semibold desktop:hidden'>
          Залишити відгук
        </Button>
        <div className='mb-10'>
          <ul className='text-xs tablet:text-base flex gap-[30px] mb-5'>
            <Link iconClassName='hidden'>Всі відгуки</Link>
            <Link
              linkClassName='!text-gray'
              iconClassName='hidden'>
              Про товари
            </Link>
            <Link
              linkClassName='!text-gray'
              iconClassName='hidden'>
              Про Магазин
            </Link>
          </ul>
          <div className='h-1 w-full bg-white rounded-lg relative'>
            <div className='h-1 w-[102px] bg-yellow absolute top-0 left-0'></div>
          </div>
        </div>
        <ReviewList />
        <Button className='mx-auto font-semibold desktop:w-[300px]'>
          <Icon
            name='reload'
            className='size-6'
          />
          Показати ще відгуки
        </Button>
      </div>
      <ReviewForm />
    </div>
  </section>
)
