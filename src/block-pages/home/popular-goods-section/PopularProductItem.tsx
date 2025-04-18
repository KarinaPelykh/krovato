import { Link } from '../../../components'
import { CardBtnControls } from '../../../components/ui/produc-card/CardBtnControls'
import { CardImage } from '../../../components/ui/produc-card/CardImage'
import { CardInfo } from '../../../components/ui/produc-card/CardInfo'
import { CardPrice } from '../../../components/ui/produc-card/CardPrice'
import { Card } from '../../../components/ui/produc-card/ProductCad'
import { Product } from '../../../redux/type'

type PopularProductItemProps = {
  product: Product
}
export const PopularProductItem = ({ product }: PopularProductItemProps) => {
  const { _id, image, title, size, isAvailable, price, sale } = product
  return (
    <Card product={product}>
      <Link to={`/product/${_id}`}>
        <CardImage image={image} />
      </Link>

      <CardInfo
        title={title}
        size={size}
        isAvailable={isAvailable}
      />

      <CardPrice
        price={price}
        sale={sale}>
        <CardBtnControls />
      </CardPrice>
    </Card>
  )
}
