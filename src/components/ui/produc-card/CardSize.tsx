type CardSizeProps = {
  size: string
}

export const CardSize = ({ size }: CardSizeProps) => (
  <p className='text-m mb-2.5 desktop:text-xs text-gray'>{size}</p>
)
