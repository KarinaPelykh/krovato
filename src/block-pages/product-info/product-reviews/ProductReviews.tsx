import { useState } from 'react'
import { ReviewSvgList } from '../../../shared/reviews-section/RevievSvgList'
import { Button } from '../../../components/ui'
import { AnswerReviewFrom } from './AnswerReviewFrom'
import { CardReview } from './CardReview'

export const ProductReviews = () => {
  const [isActive, setIsActive] = useState<null | number>(null)

  const handleDisplayingForm = (index: number) => {
    setIsActive(prevState => (prevState === index ? null : index))
  }

  return (
    <div className='p-[30px] bg-white rounded-lg'>
      <h2 className='text-black font-semibold text-lg desktop:text-1xl mb-5 desktop:m-0'>
        Відгуки про Ліжко двоспальне МК-1 з підйомним механізмом
      </h2>
      <div className='flex gap-[41px] desktop:items-center mb-10 flex-col desktop:flex-row'>
        <p className='text-base text-gray'>
          Всього відгуків:<span>93</span>
        </p>
        <div className='flex items-center gap-2.5'>
          <ReviewSvgList rate={5} />
          <p className='text-base text-gray'>Середня оцінка 4,5</p>
        </div>
      </div>
      <ul className='flex flex-col gap-[30px]'>
        {[...Array(5)].map((_, index) => (
          <li
            key={index}
            className='border-[3px] pb-[30px] border-b-yellow desktop:border-b-white-light border-t-0
              border-x-0 last:border-0'>
            <CardReview
              handleDisplayingForm={() => handleDisplayingForm(index)}
            />
            {isActive === index && <AnswerReviewFrom />}
          </li>
        ))}
      </ul>

      <Button
        buttonClassName='mx-auto font-semibold desktop:w-[300px] '
        iconClassName='!size-6'
        iconName='reload'>
        Показати ще відгуки
      </Button>
    </div>
  )
}
