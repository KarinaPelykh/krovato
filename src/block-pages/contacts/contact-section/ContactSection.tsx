import { ContactList } from '../../../components/Header/nav/ContactList'
import { Icon } from '../../../components'
import { Headings } from '../../../components/ui/Headings'

export const ContactSection = () => (
  <section className='pb-17 desktop:pb-18'>
    <div className='container'>
      <Headings
        as='h1'
        className='desktop:text-center mb-10'>
        Контакти
      </Headings>
      <ul className='flex flex-col gap-[30px] desktop:flex-row desktop:gap-[50px] mb-[70px]'>
        <li className='flex gap-[15px]'>
          <Icon
            name='tel-contact'
            className='size-[50px]'
          />

          <div className='w-[203px]'>
            <p className='text-gray-light text-base mb-2.5'>Телефони:</p>
            <p className='text-xl font-semibold'>+38 067 929-45-45</p>
            <p className='text-xl font-semibold'>+38 050 133-45-45</p>
            <p className='text-xl font-semibold'>+38 093 170-75-45</p>
          </div>
        </li>
        <li className='flex gap-[15px]'>
          <Icon
            name='email-contact'
            className='size-[50px]'
          />
          <div className='w-[203px]'>
            <p className='text-gray-light text-base mb-2.5'>Напишіть нам:</p>
            <p className='text-xl font-semibold mb-5'>info.krovato@gmail.com</p>
            <ContactList textClassName='hidden' />
          </div>
        </li>
        <li className='flex gap-[15px]'>
          <Icon
            name='address-contact'
            className='size-[50px]'
          />
          <div className='w-[203px]'>
            <p className='text-gray-light text-base mb-2.5'>
              Де ми знаходимось:
            </p>
            <p className='text-xl font-semibold'>
              м. Київ провулок Ізяславський 52, пов. 2
            </p>
          </div>
        </li>
        <li className='flex gap-[15px]'>
          <Icon
            name='calendar-contact'
            className='size-[50px]'
          />
          <div className='w-[203px]'>
            <p className='text-gray-light text-base mb-2.5'>Графік роботи:</p>
            <p className='text-xl font-semibold'>
              Працюємо щодня з 9:00 до 18:00
            </p>
          </div>
        </li>
      </ul>
      <div className='desktop:flex w-full'>
        <img
          src='/contact-section/shop.png'
          alt='shop'
          className='w-full desktop:w-1/2 h-auto'
        />

        <img
          src='/contact-section/location-shop.png'
          alt='location-shop'
          className='w-full desktop:w-1/2 h-auto'
        />
      </div>
    </div>
  </section>
)
