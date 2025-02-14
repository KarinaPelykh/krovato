import { useTranslation } from 'react-i18next'
import { FaqList } from './FaqList'
import { sizeWindow } from '../../hook/sizeWIndow'
import { Headings } from '../ui/Headings'

type FaqList = {
  question: string
  answer: string
}

type FaqSectionProps = {
  title?: string
  listQuestion?: FaqList[]
  isProductPage?: boolean
}

export const FaqSection = ({
  title,
  listQuestion,
  isProductPage
}: FaqSectionProps) => {
  const { t } = useTranslation('translation', {
    keyPrefix: 'PaymentPage.faq-section'
  })

  const list = t('list-question', {
    returnObjects: true
  }) as FaqList[]

  const { size } = sizeWindow()

  const isNotDesktop = size < 1440

  return (
    <section className='pt-17 desktop:pt-18'>
      <div className='container'>
        <Headings className='mb-10 text-center'>
          {(title && isNotDesktop) || isProductPage ? title : t('title')}
        </Headings>
        <ul className='flex flex-col gap-4'>
          {(listQuestion && (isProductPage || isNotDesktop)
            ? listQuestion
            : list
          ).map(({ question, answer }, i) => (
            <FaqList
              key={i}
              question={question}
              answer={answer}
            />
          ))}
        </ul>
      </div>
    </section>
  )
}
