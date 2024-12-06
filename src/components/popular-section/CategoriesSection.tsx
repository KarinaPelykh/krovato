import { PopularList } from "./PopularList";

export const CategoriesSection = () => {
  return (
    <section>
      <div className=" container">
        <h1 className="mb-10">Популярні категорії</h1>
        <PopularList />
      </div>
    </section>
  );
};
