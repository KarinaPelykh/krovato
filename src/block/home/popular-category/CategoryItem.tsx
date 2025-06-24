import { Icon, Link } from '../../../components'

type CategoryItemProps = {
  quantity: string
  image: string
  title: string
  id: string
}

export const CategoryItem = ({
  quantity,
  image,
  title,
  id
}: CategoryItemProps) => {
  return (
    <>
      <div className='flex justify-between items-center desktop:mb-[60px] p-[15px] desktop:p-5'>
        <span className='text-ms font-semibold desktop:text-xl text-black'>
          {title}
        </span>
        <span className='text-ms desktop:text-xl text-gray-light font-semibold'>
          {quantity}
        </span>
      </div>

      <img
        src={image}
        alt='image of furniture category'
        className='object-cover absolute bottom-0 right-0 z-0'
      />
      <Link
        to={`product/category/${id}`}
        iconClassName='hidden'>
        <Icon
          className='size-[50px] absolute right-5 bottom-5'
          name='arrow'
        />
      </Link>
      <div
        className='absolute right-0 bottom-0 w-full bg-white-light rounded-t-full h-20 desktop:h-48
          -z-10'></div>
    </>
  )
}
