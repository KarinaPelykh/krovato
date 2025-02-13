import { MainControls } from './main-controls/MainControls'
import { Nav } from './nav/Nav'
import { CategoriesList } from './CategoriesList'
import { SpecialOfferList } from './SpecialOfferList'
import { useLocation } from 'react-router-dom'
import clsx from 'clsx'

export const Header = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <header className={clsx(isHome ? 'pb-[70px] ' : '')}>
      <Nav />
      <div className='bg-white border-b border-white-light'>
        <MainControls />
      </div>
      <div className='bg-white'>
        <div className='container hidden desktop:flex !py-[18px]'>
          <SpecialOfferList />
          <CategoriesList />
        </div>
      </div>
    </header>
  )
}
