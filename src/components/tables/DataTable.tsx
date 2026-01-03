"use client";

type Column<T> = {
  header: string | any;
  accessor: keyof T;
  align?:string;
  render?: (value: any, row: T) => React.ReactNode;
};

export default function DataTable<T extends { id: number }>({
  columns,
  data,
  onDelete,
}: {
  columns: Column<T>[];
  data: T[];
  onDelete?: (row: T) => void;
}) {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full text-sm">
        <thead className="bg-slate-50 border-b border-slate-200">
          <tr>
            {columns.map((col) => (
              <th
                key={String(col.accessor)}
                className="px-5 py-3 text-left font-semibold text-slate-600"
              >
                {col.header}
              </th>
            ))}
            {onDelete && (
              <th className="px-5 py-3 text-left font-semibold text-slate-600">
                Actions
              </th>
            )}
          </tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr
              key={row.id}
              className="border-b border-slate-100 hover:bg-slate-50 transition"
            >
              {columns.map((col) => {
                const value = row[col.accessor];

                return (
                  <td key={String(col.accessor)} className="px-5 py-3">
                    {col.render ? col.render(value, row) : String(value ?? "")}
                  </td>
                );
              })}

              {onDelete && (
                <td className="px-5 py-3 flex gap-3">
                  <button className="text-slate-700 hover:underline">
                    Edit
                  </button>
                  <button
                    className="text-rose-600 hover:underline"
                    onClick={() => onDelete(row)}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
