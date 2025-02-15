import { Icon, Button } from '../../ui'

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
        key={i}
        className='desktop:first:hidden'>
        <Button
          className='!bg-transparent !p-0'
          onClick={icon === 'poisk' ? onClick : undefined}>
          <Icon
            className='size-[50px]'
            name={isOpenCatalog && icon === 'poisk' ? 'close-1' : icon}
          />
        </Button>
      </li>
    ))}
  </ul>
)
