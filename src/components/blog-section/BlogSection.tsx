import { Button, Link } from '../../components'
import { Headings } from '../ui/Headings'
// import { NewCard } from '../ui/NewCard'

export const BlogSection = () => (
  <section>
    <div className='container'>
      <Headings
        as='h1'
        className='text-center mb-10 desktop:text-start'>
        Блог
      </Headings>
      <ul
        className='grid gap-[30px] tablet:grid-cols-2 tablet:grid-rows-6 desktop:grid-cols-3
          desktop:grid-rows-4 mb-[30px]'>
        {[...Array(12)].map((_, i) => (
          <Link
            key={i}
            to={`${i}`}
            iconClassName='hidden'>
            {/* <NewCard /> */}
          </Link>
        ))}
      </ul>
      <Button
        buttonClassName='mx-auto font-semibold desktop:w-[300px]'
        iconName='reload'
        iconClassName='!size-6'>
        Показати ще статті
      </Button>
    </div>
  </section>
)
