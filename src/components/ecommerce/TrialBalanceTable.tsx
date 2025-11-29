import { useState } from "react";

export default function TrialBalanceTable() {
  const [rows, setRows] = useState([{}]);
  const [inputs, setInputs] = useState<{ [row: number]: { [col: number]: string } }>({});

  const mainColumns = [
    "رقم الحساب",
    "رقم الدليل",
    "اسم الحساب",
    "العملة",
    "مدين",
    "دائن",
    "مدين بالعملة المحلية",
    "دائن بالعملة المحلية",
    "الحالة",
  ];

  const addRow = () => {
    if (rows.length < 30) setRows([...rows, {}]);
  };

  const deleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
    const newInputs = { ...inputs };
    delete newInputs[index];
    setInputs(newInputs);
  };

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [rowIndex]: {
        ...prev[rowIndex],
        [colIndex]: value,
      },
    }));
  };

  const handleSave = () => {
    const tableData = rows.map((_, rowIndex) => {
      const rowData: { [key: string]: string } = {};
      mainColumns.forEach((col, colIndex) => {
        rowData[col] = inputs[rowIndex]?.[colIndex] || "";
      });
      return rowData;
    });

    console.log("بيانات الجدول:", tableData);
    alert("تم حفظ البيانا");
  };

  return (
    <div className="p-6 overflow-hidden transition-all duration-300" style={{ width: "80vw" }}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-bold text-right">ميزان المراجعة</h2>
        <div className="flex gap-2">
          <button
            onClick={addRow}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            ➕ إضافة صف
          </button>
          <button
            onClick={handleSave}
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition"
          >
            💾 حفظ
          </button>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow overflow-x-auto max-w-full">
        <table className="border border-gray-400 text-center text-sm min-w-max">
          {/* الهيدر */}
          <thead>
            <tr className="bg-blue-300 text-black">
              {mainColumns.map((col, i) => (
                <th key={i} className="border p-2 whitespace-nowrap">
                  {col}
                </th>
              ))}
              <th className="border p-2 whitespace-nowrap">إجراء</th>
            </tr>
          </thead>

          {/* جسم الجدول */}
          <tbody>
            {rows.map((_, rowIndex) => (
              <tr key={rowIndex} className="border-t">
                {mainColumns.map((_, colIndex) => (
                  <td key={colIndex} className="border p-2">
                    <textarea
                      value={inputs[rowIndex]?.[colIndex] || ""}
                      onChange={(e) =>
                        handleInputChange(rowIndex, colIndex, e.target.value)
                      }
                      onInput={(e) => {
                        const target = e.target as HTMLTextAreaElement;
                        target.style.height = "auto";
                        target.style.height = `${target.scrollHeight}px`;
                      }}
                      className="min-w-[100px] text-center border border-gray-300 rounded p-2 text-base
                                 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white
                                 resize-none overflow-hidden"
                    />
                  </td>
                ))}

                {/* زر الحذف */}
                <td className="border p-2">
                  <button
                    onClick={() => deleteRow(rowIndex)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                  >
                    ❌ حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
