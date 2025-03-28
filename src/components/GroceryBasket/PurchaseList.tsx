import { useAppDispatch, useAppSelector } from '../../hook/hooks'
import { deleteProduct } from '../../redux/basketSlice'
import { basketSelector } from '../../redux/selector'
import { Button, Icon } from '../ui'
import { Headings } from '../ui/Headings'

export const PurchaseList = () => {
  const basketProduct = useAppSelector(basketSelector)

  const dispatch = useAppDispatch()

  return (
    <>
      {basketProduct.length !== 0 ? (
        <ul>
          {basketProduct.map(
            ({ _id, image, size, title, isAvailable, price, sale }) => (
              <li
                key={_id}
                className='flex justify-between items-start first:pt-0 border-[2px] py-[30px] border-x-0
                  border-t-0 border-b-gray-light'>
                <div>
                  <img
                    className='w-[120px] h-[100px] mb-[15px]'
                    src={image}
                    alt='sofa product in  basket'
                    width={120}
                    height={100}
                  />
                  <div
                    className='flex justify-center gap-[15px] py-[17px] px-[25px] w-full desktop:w-fit border
                      border-gray-light rounded-lg'>
                    <Button
                      buttonClassName='!bg-transparent !p-0 !w-fit  !text-gray '
                      iconClassName='hidden'>
                      -
                    </Button>
                    <span className='text-black'>1</span>
                    <Button
                      buttonClassName='!bg-transparent !p-0 !w-fit  !text-gray '
                      iconClassName='hidden'>
                      +
                    </Button>
                  </div>
                </div>
                <div className='flex flex-col'>
                  <p className='text-xs desktop:text-gray mb-1'>{size}</p>
                  <Headings
                    as='h3'
                    className='!text-ms mb-1 !font-semibold desktop:w-[276px]'>
                    {title}
                  </Headings>
                  <div className='flex gap-[5px] mb-5'>
                    <Icon name='check' />
                    {isAvailable}
                  </div>

                  <div className='flex items-center flex-col desktop:flex-row'>
                    <p className='text-xl font-semibold'>{price}</p>
                    {sale && (
                      <p className='text-red font-semibold line-through desktop:mr-auto'>
                        {sale}
                      </p>
                    )}
                  </div>
                </div>
                <Button
                  onClick={() => dispatch(deleteProduct(_id))}
                  buttonClassName='!bg-transparent !p-0 !w-fit'
                  iconName='delete'
                  iconClassName='!size-6'
                />
              </li>
            )
          )}
        </ul>
      ) : (
        <p className='text-black'>You do not have anything in basket</p>
      )}
    </>
  )
}
