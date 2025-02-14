import { Card } from '../../../components/ui/Card/Card'

export const ReviewList = () => (
  <ul className='flex flex-col items-center mb-[30px]'>
    {[...Array(10)].map((_, i) => (
      <li
        key={i}
        className='mb-[30px]'>
        <Card
          textClassName=' h-auto desktop:w-full'
          name='Іван Стедниця'
          product='Крісло для геймерів AEROCOOL EARL Steel Blue'
          description='Покупали сыну игровое кресло в подарок. Качество супер, очень удобное и отлично поддерживает спину. В общем подарком более чем доволен) Отдельное спасибо магазину Мебельок за помощь в выборе кресла!'
        />
      </li>
    ))}
  </ul>
)
