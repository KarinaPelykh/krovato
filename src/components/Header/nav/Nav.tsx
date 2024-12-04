import { LanguageButton } from "../../languageButton";
import { ContactLast } from "./ContactList";
import { NavList } from "./NavList";
export const Nav = () => {
  return (
    <div className="flex">
      <NavList />
      <ContactLast />
      <LanguageButton />
    </div>
  );
};
