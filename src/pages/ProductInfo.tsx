import { useParams } from 'react-router-dom'
import {
  AdvantageList,
  DescriptionProduct,
  InfoOfProduct
} from '../block-pages/product-info'
import { AdditionProduct } from '../components/ui/addition-products/AdditionProduct'

export const ProductInfo = () => {
  const { id } = useParams()

  return (
    <>
      <InfoOfProduct id={id ?? ''} />
      <AdvantageList />
      <DescriptionProduct />
      <AdditionProduct title='Відмінно доповнюють спальню тумба або комод' />
      <AdditionProduct title='  Рекомендовані товари' />
    </>
  )
}
