type ItemFilterProps = {
  item: string
}
export const ItemFilter = ({ item }: ItemFilterProps) => (
  <label className='flex items-center gap-2.5 text-base'>
    <input type='checkbox' />
    {item}
  </label>
)
