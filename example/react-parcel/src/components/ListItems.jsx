export default function ListItems({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} style={{ color: item.color }}>
          {item.name}
        </li>
      ))}
    </ul>
  );
}
