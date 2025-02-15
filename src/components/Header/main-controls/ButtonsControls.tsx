import { Button } from '../../ui'

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
          onClick={icon === 'poisk' ? onClick : undefined}
          buttonClassName='!bg-transparent !p-0'
          iconName={isOpenCatalog && icon === 'poisk' ? 'close-1' : icon}
        />
      </li>
    ))}
  </ul>
)
