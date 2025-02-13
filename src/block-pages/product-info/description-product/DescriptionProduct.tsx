import { ReviewForm } from '../../reviews/reviews/ReviewForm'
import { Characteristic } from '../Characteristic'
import { ProductReviews } from '../product-reviews/ProductReviews'

export const DescriptionProduct = () => {
  return (
    <section>
      <div className='container flex gap-[30px] mb-[50px]'>
        <div>
          <h2 className='text-black text-1xl font-semibold mb-[30px]'>
            Опис товару
          </h2>
          <p className='text-black mb-[30px]'>
            Модель МК-1 – це ліжко від українського виробника, компанії
            MegaMebli. Вона виготовляється з ДСП та оснащена м'якою спинкою.
            Також може бути виготовлена з дерев'яного щита (сосни). Ламелі
            виконані з бука. Подібна конструкція характеризується надійністю та
            привабливим зовнішнім виглядом.
          </p>

          <img
            src='/colors-of-product/products-color.png'
            alt='products color'
            className='w-[320px] tablet:w-[410px] desktop:w-full h-auto object-contain mb-10
              desktop:mb-[50px]'
          />

          <Characteristic />
          <ProductReviews />
        </div>
        <div className='hidden desktop:flex'>
          <ReviewForm hiddenLogo='hidden' />
        </div>
      </div>
    </section>
  )
}
