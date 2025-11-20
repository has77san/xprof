import { useState } from "react";

interface Row {
  date: string;
  description: string;
  debit: string;
  credit: string;
}

interface TableData {
  title: string;
  rows: Row[];
  setRows: (rows: Row[]) => void;
}

export default function LedgerTable() {
  const [salariesRows, setSalariesRows] = useState<Row[]>([]);
  const [insuranceRows, setInsuranceRows] = useState<Row[]>([]);
  const [taxRows, setTaxRows] = useState<Row[]>([]);
  const [clientsRows, setClientsRows] = useState<Row[]>([]);

  const tables: TableData[] = [
    { title: "رواتب وأجور 331", rows: salariesRows, setRows: setSalariesRows },
    { title: "المساهمة في الضمان 314", rows: insuranceRows, setRows: setInsuranceRows },
    { title: "مخصص الضرائب 224", rows: taxRows, setRows: setTaxRows },
    { title: "التزامات العملاء لقاء خطابات الضمان 2921", rows: clientsRows, setRows: setClientsRows },
  ];

  const addRow = (table: TableData) => {
    table.setRows([...table.rows, { date: "", description: "", debit: "", credit: "" }]);
  };

  const updateRow = (table: TableData, index: number, field: keyof Row, value: string) => {
    const updated = [...table.rows];
    updated[index][field] = value;
    table.setRows(updated);
  };

  const saveRows = (table: TableData) => {
    console.log(`Saved Rows for ${table.title}:`, table.rows);
    alert(`تم حفظ بيانات جدول "${table.title}" بنجاح! ✓`);
  };

  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tables.map((table, tIndex) => (
          <div key={tIndex} className="space-y-4">
            {/* Title */}
            <div className="text-center text-xl font-bold mb-2 bg-green-200 py-2 rounded-xl">
              {table.title}
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
                  {table.rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-blue-100" : "bg-white"}>
                      <td className="border p-2">
                        <input
                          type="text"
                          className="w-full text-center bg-transparent outline-none"
                          value={row.debit}
                          onChange={(e) => updateRow(table, index, "debit", e.target.value)}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          className="w-full text-center bg-transparent outline-none"
                          value={row.credit}
                          onChange={(e) => updateRow(table, index, "credit", e.target.value)}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="text"
                          className="w-full text-center bg-transparent outline-none"
                          value={row.description}
                          onChange={(e) => updateRow(table, index, "description", e.target.value)}
                        />
                      </td>
                      <td className="border p-2">
                        <input
                          type="date"
                          className="w-full text-center bg-transparent outline-none"
                          value={row.date}
                          onChange={(e) => updateRow(table, index, "date", e.target.value)}
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
                onClick={() => addRow(table)}
                className="bg-blue-600 text-white px-6 py-2 text-lg rounded-full shadow hover:bg-blue-700 transition"
              >
                + إضافة صف
              </button>
              <button
                onClick={() => saveRows(table)}
                className="bg-green-600 text-white px-6 py-2 text-lg rounded-full shadow hover:bg-green-700 transition"
              >
                💾 حفظ
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
