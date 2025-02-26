import { Link } from '../../../components'
import { NewCard } from '../../../components/ui/NewCard'

type ItemListProps = {
  id?: number
}

export const ItemList = ({ id }: ItemListProps) => (
  <li>
    <Link
      to={`blog/${id}`}
      iconClassName='hidden'>
      <NewCard />
    </Link>
  </li>
)
