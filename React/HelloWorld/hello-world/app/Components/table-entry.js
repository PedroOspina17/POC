export function TableEntry({ entry }) {
  return (
    <>
      {entry.age > 18 && ( // Show or hide based on a condition
        <tr>
          <td>{entry.id}</td>
          <td>{entry.name}</td>
          <td className={`${entry.age > 60 ? "bg-danger" : ""}`}>{entry.age}</td>
        </tr>
      )}
    </>
  );
}
export default TableEntry;
