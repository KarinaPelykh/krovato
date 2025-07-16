import { Link } from '../../../components'
import { CardDetail } from '../../../components/ui/produc-card/CardDetails'
import { CardImage } from '../../../components/ui/produc-card/CardImage'
import { CardTitle } from '../../../components/ui/produc-card/CardTitle'
import { Card } from '../../../components/ui/produc-card/ProductCad'

type ItemListProps = {
  id?: number
}

export const ItemList = ({ id }: ItemListProps) => (
  <Link
    to={`blog/${id}`}
    iconClassName='hidden'>
    <Card
      itemClassName='overflow-hidden border-x-gray-light group border-b-gray-light
      border-t-0 border-t-transparent border !p-0 !size-full'>
      <CardImage
        image='/furniture.webp'
        imageClassName='transition-all mb-[30px] ease-in-out duration-500 desktop:group-hover:h-full
       w-[410px] 
        h-[270px] object-cover'
      />
      <div className='px-[30px] pb-5'>
        <CardTitle
          title='Стільці для вітальні. Як правильно вибрати?'
          titleClassName='!text-lg mb-[30px] text-black h-auto'
        />
        <CardDetail
          name='arrow-1'
          iconClassName='fill-yellow'
          detailClassName='text-yellow text-ms flex gap-2.5 items-center mb-0'>
          Детальніше
        </CardDetail>
      </div>
    </Card>
  </Link>
)
