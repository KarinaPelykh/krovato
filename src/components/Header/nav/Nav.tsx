import { LanguageButton } from "../../languageButton";
import { ContactList } from "./ContactList";
import { NavList } from "./NavList";
export const Nav = () => {
  return (
    <div className="hidden  tablet:flex !py-[15px] container">
      <NavList />
      <ContactList />
      <LanguageButton />
    </div>
  );
};
