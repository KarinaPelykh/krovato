import clsx from 'clsx'
import { ServiceInformation } from './ServiceSection.type'
import { Headings } from '../ui/Headings'

type ServiceListProps = {
  data: ServiceInformation[]
  title: string
  subtitle?: string
  isElevator?: boolean
}

export const ServiceList = ({
  data,
  title,
  subtitle,
  isElevator
}: ServiceListProps) => (
  <div>
    <Headings className={clsx('text-center', subtitle ? 'mb-2.5' : 'mb-10')}>
      {title}
    </Headings>
    <p className='text-center text-1xl font-semibold mb-10'>{subtitle}</p>
    <ul className='flex gap-2.5 flex-col mb-10'>
      {data.map(({ service, price, isFree }, i) => {
        return (
          <li
            className='flex justify-between gap-2.5 items-center p-[15px] flex-col desktop:flex-row
              odd:bg-white-light odd:rounded-lg'
            key={i}>
            <span className='text-center desktop:whitespace-nowrap'>
              {service}
            </span>
            <span className='w-full border-b border-dotted border-black'></span>

            <span className='whitespace-nowrap'>
              {isElevator ? price : isFree}
            </span>
          </li>
        )
      })}
    </ul>
  </div>
)
