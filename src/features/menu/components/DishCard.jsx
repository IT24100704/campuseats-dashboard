function DishCard({ dish }) {
  return (
    <div>
      <h2>{dish.name}</h2>
      <p>Rs. {dish.price}</p>
      <p>{dish.category}</p>

      {dish.available ? (
        <button>Order</button>
      ) : (
        <p>Currently unavailable</p>
      )}
    </div>
  );
}

export default DishCard;