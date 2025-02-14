import { ReviewSvgList } from '../../about-as/reviews-section/RevievSvgList'
import { Button, Icon } from '../../../components/ui'

type CardReviewProps = {
  handleDisplayingForm: () => void
}

export const CardReview = ({ handleDisplayingForm }: CardReviewProps) => (
  <>
    <div className='flex mb-[30px] desktop:items-center'>
      <div className='desktop:flex desktop:justify-between desktop:items-center w-full'>
        <p className='flex gap-5 items-center mb-2.5'>
          <Icon
            className='size-[50px]'
            name='avatar'
          />
          <span className='text-black text-base'>Іван Стедниця</span>
        </p>
        <div className='flex gap-5 items-center'>
          <ReviewSvgList className='fill-yellow' /> <span>20.12.2022</span>
        </div>
      </div>
    </div>
    <p className='text-base w-full mb-5'>
      Купували сину ігрове крісло в подарунок. Якість супер, дуже зручне і
      чудово підтримує спину. Загалом, подарунком більш ніж задоволені
    </p>

    <div className='flex flex-col desktop:items-center gap-2.5 desktop:gap-[30px] desktop:flex-row'>
      <Button
        className='!w-fit !bg-transparent !p-0 m-0 !text-gray'
        onClick={handleDisplayingForm}>
        <Icon name='review-chat' />
        Відповісти
      </Button>
      <Button className='!w-fit !bg-transparent !p-0 m-0 !text-gray'>
        <Icon name='Close' />
        Приховати відповіді
      </Button>

      <Button className='!w-fit !bg-transparent !p-0 m-0 !text-gray'>
        <Icon name='Like' /> Корисний відгук:<span>0</span>
      </Button>
    </div>
  </>
)
