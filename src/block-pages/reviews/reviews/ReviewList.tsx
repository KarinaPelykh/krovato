import { Card } from '../../../components/ui/Card/Card'

export const ReviewList = () => (
  <ul className='flex flex-col items-center mb-[30px]'>
    {[...Array(10)].map((_,index) => (
      <li
        key={index}
        className='mb-[30px]'>
        <Card
          textClassName='h-auto desktop:w-full'
          name='Іван Стедниця'
          product='Крісло для геймерів AEROCOOL EARL Steel Blue'
          description='Купували синові ігрове крісло в подарунок. Якість супер, дуже зручне і чудово підтримує спину. В цілому, подарунком більш ніж задоволені. Окреме спасибі магазину "Мебельок" за допомогу у виборі крісла!'
        />
      </li>
    ))}
  </ul>
)
