import { Button, Icon } from '../components'
import { Headings } from '../components/ui/Headings'

export const UserBasket = () => (
  <section>
    <div className='container'>
      <Headings as='h1'>Оформлення замовлення</Headings>
      <div>
        <div>
          <div className='bg-white p-[27px] mb-[5px]'>
            <form>
              <p className='mb-[30px]'>
                <Icon name='' />
                Інформація про покупця
              </p>
              <label>
                <input
                  type='text'
                  placeholder='Прізвище'
                  className=''
                />
                <input
                  type='text'
                  placeholder='Контактний телефон'
                  className=''
                />
              </label>
              <label>
                <input
                  type='text'
                  placeholder='Ім’я'
                  className=''
                />
                <input
                  type='text'
                  placeholder='E-mail'
                  className=''
                />
              </label>
              <input
                type='text'
                placeholder='По батькові'
                className=''
              />
              <div>
                <input type='checkbox' />
                <p>Отримуватиме замовлення інша людина</p>
              </div>
            </form>
          </div>
          <div className='bg-white p-[27px] mb-[5px]'>
            <p className='mb-[30px]'>
              <Icon name='' /> Інформація про покупця
            </p>
            <ul>
              <li>
                <Icon name='' />
                <p>Самовивіз із магазину Бесплатно</p>
              </li>
              <li>
                <Icon name='' /> <p>Доставка Нова Пошта ≈ від 500 грн</p>
              </li>
              <li>
                <Icon name='' /> <p>Доставка кур'єром ≈ від 200 грн</p>
              </li>
            </ul>
            <div>
              <Icon name='' />
              <div>
                <p>Графік роботи: щодня з 9:00 до 18:00</p>
                <p>м. Київ, пров. Ізяславський 52, пов. 2</p>
              </div>
              <Button
                iconName='map'
                iconClassName='!size-6'>
                На мапі
              </Button>
            </div>
          </div>
          <div className='bg-white p-[27px] mb-[5px]'>
            <p className='mb-[30px]'>
              <Icon name='' />
              Вибір способу оплати
            </p>
            <ul>
              <li>
                <input type='radio' />
                <p>Готівкою при отриманні (Післясплата)</p>
              </li>
              <li>
                <input type='radio' />
                <p>Оплата карткою на сайті</p> <Icon name='' /> <Icon name='' />
              </li>
              <li>
                <input type='radio' />
                <p>Privat Pay</p> <Icon name='' />
              </li>
              <li>
                <input type='radio' />
                <p>Кредит від Krovato</p>
              </li>
              <li>
                <input type='radio' />
                <p>Оплата частинами ПриватБанк</p> <Icon name='' />
              </li>
              <li>
                <input type='radio' />
                <p>Оплата частинами МоноБанк</p> <Icon name='' />
              </li>
            </ul>
          </div>
          <div className='bg-white p-[27px] mb-[5px]'>
            <form>
              <p className='mb-[30px]'>
                <Icon name='' />
                Коментар до замовлення
              </p>
              <textarea placeholder='Ваш коментар'></textarea>
            </form>
          </div>
          <div>
            <p>
              Ваш кошик <span>4</span>
            </p>
            <li>
              <div>
                <img />
                <div>-+1</div>
              </div>
              <div>
                <p></p>
                <Headings as='h3'>s</Headings>
              </div>
              <p>
                <Icon name='' />
              </p>
              <div>
                <span>15 400u</span> <span>15 400u</span>
              </div>
              <Button />
            </li>

            <div>
              <Icon name='' /> <p></p> <input /> <Button>OK</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
