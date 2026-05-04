import { useEffect, useState } from "react";
import API from "../utils/api";
import ItemCard from "../components/ItemCard.jsx";

function Items() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await API.get("/items");
        setItems(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchItems();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Items for Sale</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Items;