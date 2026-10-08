import { useState } from "react";

function OrderPage() {
  const [name, setName] = useState("");
  const [dish, setDish] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
  e.preventDefault();

  if (!name.trim()) {
    alert("Please enter your name");
    return;
  }

  if (!dish.trim()) {
    alert("Please enter a dish");
    return;
  }

  if (quantity < 1) {
    alert("Quantity must be at least 1");
    return;
  }

  if (!phone.trim()) {
    alert("Please enter your phone number");
    return;
  }

  console.log({
    name,
    dish,
    quantity,
    phone
  });

  alert("Order placed successfully!");
}

  return (
    <div>
      <h1>Place Order</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label>Dish</label>
          <input
            value={dish}
            onChange={(e) => setDish(e.target.value)}
          />
        </div>

        <div>
          <label>Quantity</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div>
          <label>Phone</label>
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}

export default OrderPage;