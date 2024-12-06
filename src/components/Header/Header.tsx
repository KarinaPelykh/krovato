import { MainControls } from "./main-controls/MainControls";
import { Nav } from "./nav/Nav";
import { CategoriesList } from "./CategoriesList";
import { SpecialOfferList } from "./SpecialOfferList";

export const Header = () => {
  return (
    <header className="pb-[70px]">
      <Nav />
      <div className="bg-white  border-b border-[#F8F8F8]">
        <MainControls />
      </div>
      <div className=" bg-white  ">
        <div className="container  flex gap-[112px] !py-[18px]">
          <SpecialOfferList />
          <CategoriesList />
        </div>
      </div>
    </header>
  );
};
