import { GroceryBasket } from '../GroceryBasket/GroceryBasket'
import { Icon } from '../ui'
import { Headings } from '../ui/Headings'
import { CustomerForm } from './CustomerForm'
import { DeliverySelection } from './DeliverySelection'
import { Payment } from './Payment'

export const PurchaseOrder = () => (
  <section>
    <div className='container'>
      <Headings
        as='h1'
        className='mb-[30px] desktop:mb-10'>
        Оформлення замовлення
      </Headings>
      <div className='desktop:flex desktop:justify-between'>
        <div className=' mb-[60px] desktop:mr-[30px]'>
            <CustomerForm />
     
          <DeliverySelection />
          <Payment />
          <div className='bg-white p-[27px] mb-[5px]'>
            <form>
              <p className='mb-[30px] flex gap-[15px] text-xl  desktop:text-lg items-center'>
                <Icon
                  name='comment'
                  className='!size-10 desktop:!size-[60px]'
                />
                Коментар до замовлення
              </p>
              <textarea
                placeholder='Ваш коментар'
                className='bg-transparent border outline-none border-gray-light rounded-lg py-2.5 px-5
                  w-full mb-5 placeholder:text-gray'></textarea>
            </form>
          </div>
        </div>
        <GroceryBasket />
      </div>
    </div>
  </section>
)
