import { useEffect, useState } from "react";
import MenuList from "../components/MenuList";
import SearchBar from "../components/SearchBar";
import useDebounce from "../hooks/useDebounce";
import { getMenu } from "../services/menuService";

function MenuPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMenu() {
      try {
        const data = await getMenu();
        setDishes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadMenu();
  }, []);

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  return (
    <div>
      <h1>CampusEats Menu</h1>

      {loading && <p>Loading menu...</p>}

      {error && <p>{error}</p>}

      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <MenuList dishes={filteredDishes} />
    </div>
  );
}

export default MenuPage;