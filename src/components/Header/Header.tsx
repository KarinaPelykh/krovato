import { MainControls } from "./main-controls/MainControls";
import { Nav } from "./nav/Nav";
import { CategoriesList } from "./CategoriesList";
import { SpecialOfferList } from "./SpecialOfferList";

export const Header = () => {
  return (
    <header className="pb-[70px] ">
      <Nav />
      <div className="bg-white  border-b border-white-light">
        <MainControls />
      </div>
      <div className=" bg-white  ">
        <div className="container hidden desktop:flex  !py-[18px]">
          <SpecialOfferList />
          <CategoriesList />
        </div>
      </div>
    </header>
  );
};
