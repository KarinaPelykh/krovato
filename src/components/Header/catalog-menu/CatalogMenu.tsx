import { useState } from 'react'
import { Button, Icon } from '../../ui'
import { AssortmentList } from './AssortmentList'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

// type CatalogMenuProps = {
//   openCatalog: boolean
// }

const data = [
  {
    icon: 'beds',
    text: 'Ліжка',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'mattress',
    text: 'Матраци',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'sofa',
    text: 'М’які меблі',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'wardrobe',
    text: 'Шафи',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'drawers',
    text: 'Комоди',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'thumb',
    text: 'Тумби',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'table',
    text: 'Столи',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'chair',
    text: 'Стільці',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'mstiny',
    text: 'Меблеві стіни',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  },
  {
    icon: 'kitchen',
    text: 'Кухні',
    assortment: [
      'Односпальні матраци',
      'Двоспальні матраци',
      'Пружинний блок Bonnel',
      'Пружинний блок Pocket Spring',
      'Безпружинні матраци',
      'Матраци з ефектом Зима-Літо',
      'Футони',
      'Дитячі матраци',
      'Матраци Економ'
    ]
  }
]

export const CatalogMenu = () => {
  const [prevIndex, setPrevIndex] = useState<number | null>(null)

  const handelGetCurrentIndex = (i: number) => {
    setPrevIndex(prevIndex => (prevIndex === i ? null : i))
  }
  const [openCatalog, setOpenCatalog] = useState(false)

  const handleCatalog = () => {
    setOpenCatalog(!openCatalog)
  }

  const { t } = useTranslation('translation', { keyPrefix: 'HomePage.header' })

  document.body.style.overflow = openCatalog ? 'hidden' : 'auto'

  return (
    <>
      <Button
        onClick={handleCatalog}
        buttonClassName='bg-badge gap-2.5 py-[11px] px-5 !w-[145px] !h-[46px]  mr-auto desktop:mr-0'
        iconName={openCatalog ? 'close-catalog' : 'menu-catalog'}>
        {t('buttonCatalog')}
      </Button>

      <div
        className={clsx(
          `fixed z-50 size-full pt-2.5 top-[198px] tablet:top-[100px] desktop:top-[150px]
          left-0 bg-black/80 transition-all delay-300 ease-out `,
          openCatalog ? 'translate-x-0' : 'translate-x-full'
        )}>
        <div
          className='bg-white h-[70%] overflow-auto py-2 w-full desktop:w-[623px] desktop:h-auto
            desktop:overflow-hidden desktop:rounded-xs desktop:absolute desktop:left-[130px]'>
          {data.map(({ icon, text, assortment }, i) => {
            return (
              <div
                className='desktop:flex desktop:w-fit'
                key={i}>
                <button
                  className={clsx(
                    'flex py-2.5 px-[30px] w-full justify-between desktop:w-[300px] ',
                    prevIndex === i && 'bg-yellow'
                  )}
                  onClick={() => handelGetCurrentIndex(i)}>
                  <div className='flex gap-2.5'>
                    <Icon
                      className='size-10'
                      name={icon}
                    />
                    <p className='text-xl text-black'>{text}</p>
                  </div>
                  <Icon
                    className={clsx(
                      'rotate-90 fill-yellow size-10 ',
                      prevIndex === i && '!fill-black !rotate-180'
                    )}
                    name='select'
                  />
                </button>
                <div className='h-auto w-2 bg-yellow hidden desktop:flex'></div>
                {prevIndex === i && <AssortmentList assortment={assortment} />}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
