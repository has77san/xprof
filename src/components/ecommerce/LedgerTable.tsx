import { useState } from "react";

interface Row {
  date: string;
  description: string;
  debit: string;  // مدين
  credit: string; // دائن
}

export default function LedgerTable() {
  const [rows, setRows] = useState<Row[]>([]);

  const addRow = () => {
    setRows([
      ...rows,
      { date: "", description: "", debit: "", credit: "" }
    ]);
  };

  const updateRow = (index: number, field: keyof Row, value: string) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const saveRows = () => {
    console.log("Saved Rows:", rows);
    alert("تم حفظ البيانات بنجاح! ✓");
    // هنا تقدر ترسل البيانات لسيرفر أو تخزنها
  };

  return (
    <div className="p-6 w-full max-w-4xl mx-auto">

      {/* Title */}
      <div className="text-center text-xl font-bold mb-4 bg-green-200 py-2 rounded-xl">
        رواتب وأجور 331
      </div>

      {/* Table */}
      <div className="overflow-x-auto border rounded-2xl shadow-md">
        <table className="w-full text-center border-collapse">

          <thead>
            <tr className="text-white text-lg">
              <th className="bg-blue-600 p-3">مدين</th>
              <th className="bg-orange-400 p-3">دائن</th>
              <th className="bg-green-400 p-3">البيان</th>
              <th className="bg-green-300 p-3">التاريخ</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-blue-100" : "bg-white"}
              >
                {/* مدين */}
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full text-center bg-transparent outline-none"
                    value={row.debit}
                    onChange={(e) => updateRow(index, "debit", e.target.value)}
                  />
                </td>

                {/* دائن */}
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full text-center bg-transparent outline-none"
                    value={row.credit}
                    onChange={(e) => updateRow(index, "credit", e.target.value)}
                  />
                </td>

                {/* البيان */}
                <td className="border p-2">
                  <input
                    type="text"
                    className="w-full text-center bg-transparent outline-none"
                    value={row.description}
                    onChange={(e) => updateRow(index, "description", e.target.value)}
                  />
                </td>

                {/* التاريخ */}
                <td className="border p-2">
                  <input
                    type="date"
                    className="w-full text-center bg-transparent outline-none"
                    value={row.date}
                    onChange={(e) => updateRow(index, "date", e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={addRow}
          className="bg-blue-600 text-white px-6 py-2 text-lg rounded-full shadow hover:bg-blue-700 transition"
        >
          + إضافة صف
        </button>

        <button
          onClick={saveRows}
          className="bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow hover:bg-green-700 transition"
        >
          💾 حفظ
        </button>
      </div>

    </div>
  );
}
