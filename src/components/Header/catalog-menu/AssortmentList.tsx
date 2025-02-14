import { Link } from 'react-router-dom'

type AssortmentListProps = {
  assortment: string[]
}

export const AssortmentList = ({ assortment }: AssortmentListProps) => (
  <ul
    className='flex gap-2.5 p-5 flex-col desktop:absolute desktop:top-0 desktop:right-5
      desktop:w-[268px]'>
    {assortment.map((item, i: number) => (
      <li key={i}>
        <Link
          to='/'
          className='text-ms text-black'>
          {item}
        </Link>
      </li>
    ))}
  </ul>
)
