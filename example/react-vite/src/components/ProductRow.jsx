export default function ProductRow({ product }) {
  const name = product.stocked ? (
    <span>{product.name}</span>
  ) : (
    <span style={{ color: "red" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
