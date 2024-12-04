import { MainControls } from "./main-controls/MainControls";
import { Nav } from "./nav/Nav";

export const Header = () => {
  return (
    <header className="py-[15px] ">
      <div className="container ">
        <Nav />
        <MainControls />
      </div>
    </header>
  );
};
