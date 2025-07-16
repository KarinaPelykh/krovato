import { ReviewSvgList } from '../../../shared/reviews-section/RevievSvgList'
import { ProductSlider } from '../ProductSlider'

import { Button, Icon } from '../../../components/ui'
import { ColorListProduct } from './ColorListProduct'
import { ButtonControls } from './ButtonControls'
import { ProductConfiguration } from './ProductConfiguration'
import { Headings } from '../../../components/ui/Headings'
import { useAppDispatch, useAppSelector } from '../../../hook/hooks'
import { productSelector } from '../../../redux/selector'
import { Product } from '../../../redux/type'
import { addProductInFavoriteThunk } from '../../../redux/operation'
import { toast } from 'react-toastify'

type InfoOfProductProps = {
  id: string
}

export const InfoOfProduct = ({ id }: InfoOfProductProps) => {
  const allProducts = useAppSelector(productSelector)

  const getProductById = allProducts.find(({ _id }) => _id === id)

  const { image, title, isAvailable, sale, price } = getProductById as Product

  const dispatch = useAppDispatch()

  const addToFavorite = () => {
    if (!getProductById) {
      return
    }
    dispatch(addProductInFavoriteThunk(getProductById))
      .then(() =>
        toast.success(`Add Product to favorite`, {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark'
        })
      )
      .catch(error =>
        toast.error(`${error.message}`, {
          position: 'top-right',
          hideProgressBar: true,
          theme: 'dark'
        })
      )
  }

  return (
    <section>
      <div className='container desktop:flex desktop:justify-between'>
        <div className='hidden desktop:flex'>
          <ProductSlider image={image} />
        </div>

        <div className='flex flex-col'>
          <Headings
            as='h1'
            className='mb-5 desktop:mb-[30px]'>
            {title}
          </Headings>

          <div
            className='flex flex-col gap-2.5 desktop:justify-between desktop:gap-0 mb-[30px]
              desktop:flex-row'>
            <div className='flex gap-[5px]'>
              <Icon name='check' />
              {isAvailable}
            </div>
            <div className='flex gap-2.5'>
              <ReviewSvgList rate={5} />
              <span className='ml-2.5 flex gap-2.5'>
                <Icon name='chat' />
                93 отзыва
              </span>
            </div>
            <span>Модель: 62003836</span>
          </div>
          <div className='flex desktop:hidden pb-17'>
            <ProductSlider image={image} />
          </div>

          <div className='bg-white rounded-lg p-5'>
            <div
              className='border border-x-0 border-t-0 border-b-gray-light flex items-center pb-[30px]
                mb-[30px] flex-col desktop:flex-row'>
              <p className='text-1xl font-semibold desktop:mr-[30px]'>
                {price}
              </p>
              <p className='text-red text-ms font-semibold line-through desktop:mr-auto'>
                {sale}
              </p>
              <Button
                onClick={addToFavorite}
                buttonClassName='hidden desktop:flex !bg-transparent !w-fit p-0 !text-gray font-semibold'
                iconName='liked'>
                В обране
              </Button>
            </div>

            <ProductConfiguration />

            <ColorListProduct />
            <ButtonControls />
          </div>

          <div className='flex justify-between py-2.5 px-5'>
            <Button
              buttonClassName='!bg-transparent !flex-row-reverse  !w-fit !text-gray-light'
              iconClassName='!size-[30px] mr-5'
              iconName='call'>
              +380 -- --- -- --
            </Button>
            <Button
              buttonClassName='!bg-transparent  !border-2 !border-gray h-[50px] !w-[212px] !text-gray'
              iconClassName='hidden'>
              Купити в 1 клік
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
