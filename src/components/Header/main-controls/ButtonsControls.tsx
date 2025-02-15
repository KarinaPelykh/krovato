import { Button } from '../../ui'
import { Link } from '../../ui/Link'

const data = ['poisk', 'favorite', 'basket']

type ButtonsControlsProps = {
  isOpenCatalog: boolean
  onClick: () => void
}

export const ButtonsControls = ({
  isOpenCatalog,
  onClick
}: ButtonsControlsProps) => (
  <ul className='items-center flex gap-5'>
    {data.map((icon, i) => (
      <li
        className='desktop:first:hidden'
        key={i}>
        <Link
          to={icon === 'basket' ? '/purchase' : '/'}
          iconClassName='hidden'>
          <Button
            onClick={icon === 'poisk' ? onClick : undefined}
            buttonClassName='!bg-transparent !p-0'
            iconName={isOpenCatalog && icon === 'poisk' ? 'close-1' : icon}
          />
        </Link>
      </li>
    ))}
  </ul>
)
