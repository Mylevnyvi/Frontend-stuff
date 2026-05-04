function ItemCard({ item }) {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-lg font-bold">{item.name}</h3>
      <p className="text-gray-600">${item.price}</p>
    </div>
  );
}

export default ItemCard;