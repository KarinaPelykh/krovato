import { LanguageSelect } from '../../LanguageSelect'
import { ContactList } from './ContactList'
import { NavList } from './NavList'
export const Nav = () => (
  <div className='hidden desktop:flex !py-[15px] container'>
    <NavList />
    <ContactList />
    <LanguageSelect />
  </div>
)
