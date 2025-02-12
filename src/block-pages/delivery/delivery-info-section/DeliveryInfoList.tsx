import { Icon } from '../../../components/ui'

type DeliveryInfoListProps = {
  list: string[]
}

export const DeliveryInfoList = ({ list }: DeliveryInfoListProps) => {
  return (
    <ul className='flex gap-[30px] flex-col mb-[30px]'>
      {list.map((text, i) => (
        <li
          className='flex gap-5'
          key={i}>
          <Icon
            name='deliver'
            className='size-[70px]'
          />
          <p className='text-black text-xl font-semibold w-[320px]'>{text}</p>
        </li>
      ))}
    </ul>
  )
}
