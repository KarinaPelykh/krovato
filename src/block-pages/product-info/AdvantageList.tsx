import { Link } from 'react-router-dom'
import { Icon } from '../../components/ui'
import { Headings } from '../../components/ui/Headings'

export const AdvantageList = () => {
  const data = [
    {
      iconName: 'location',
      title: 'Доставка ',
      text: 'Доставка по Києву або по всій Україні',
      link: '/delivery'
    },
    {
      iconName: 'payment',
      title: 'Оплата',
      text: 'Карткою на сайті, готівкою або через термінал',
      link: '/payment'
    },
    {
      iconName: 'security',
      title: 'Гарантія',
      text: 'Гарантія від виробника до 2 років',
      link: '/'
    },
    {
      iconName: 'support',
      title: 'Підтримка',
      text: 'Безкоштовна консультація по вибору товара',
      link: '/contact'
    }
  ]

  return (
    <section className='py-17 desktop:py-13'>
      <div className='container'>
        <ul className='flex flex-col gap-[30px] desktop:flex-row'>
          {data.map(({ iconName, title, text, link }, i) => (
            <li
              key={i}
              className='flex gap-5'>
              <Icon
                name={iconName}
                className='size-[80px]'
                isScenery={true}
              />
              <div>
                <Headings className='text-xl'>{title}</Headings>
                <p className='text-gray text-m mb-2.5'>{text}</p>
                <Link
                  to={link}
                  className='text-yellow flex gap-[5px]'>
                  Детальніше
                  <Icon
                    name='arrow-1'
                    className='fill-yellow'
                  />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
