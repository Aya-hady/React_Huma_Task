import "./Table.css";

type TableProps = {
  columns: string[];
  data: Record<string, unknown>[];
  striped?: boolean;
};

function Table({
  columns,
  data,
  striped = false,
}: TableProps) {
  return (
    <table className="data-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={
              striped && rowIndex % 2 !== 0 ? "striped" : ""
            }
          >
            {columns.map((column) => (
              <td key={column}>{String(row[column])}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;