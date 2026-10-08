import DishCard from "./DishCard";

function MenuList({ dishes }) {
  return (
    <div>
      {dishes.map((dish) => (
        <DishCard
          key={dish.id}
          dish={dish}
        />
      ))}
    </div>
  );
}

export default MenuList;