import { useState } from "react";

export default function AccountingTable() {
  const [rows, setRows] = useState([{ day: 1 }]);
  const [inputs, setInputs] = useState<{ [key: number]: string[] }>({});

  const columns = [
    "التاريخ",
    "مدين",
    "دائن",
    "التفاصيل",
    "رقم القيد",
    "المبلغ",
    "الموجودات الثابتة - مدين",
    "الموجودات الثابتة - دائن",
    "النقود - مدين",
    "النقود - دائن",
    "المطلوبات ورأس المال - مدين",
    "المطلوبات ورأس المال - دائن",
    "الاستخدامات - مدين",
    "الاستخدامات - دائن",
    "الإيرادات - مدين",
    "الإيرادات - دائن",
    "الأستاذ العام - مدين",
    "الأستاذ العام - دائن",
    "إجراء",
  ];

  const addRow = () => {
    if (rows.length < 30) {
      setRows([...rows, { day: rows.length + 1 }]);
    }
  };

  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    const renumberedRows = updatedRows.map((r, i) => ({ ...r, day: i + 1 }));
    setRows(renumberedRows);

    // حذف البيانات الخاصة بالصف المحذوف
    const newInputs = { ...inputs };
    delete newInputs[index];
    setInputs(newInputs);
  };

  // تحديث قيمة كل input
  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [rowIndex]: {
        ...prev[rowIndex],
        [colIndex]: value,
      },
    }));
  };

  // زر الحفظ
  const handleSave = () => {
    const tableData = rows.map((row, rowIndex) => {
      const rowData: { [key: string]: string } = {};
      columns.forEach((col, colIndex) => {
        if (col === "التاريخ") {
          rowData[col] = `اليوم ${row.day}`;
        } else if (col === "إجراء") {
          rowData[col] = "";
        } else {
          rowData[col] = inputs[rowIndex]?.[colIndex] || "";
        }
      });
      return rowData;
    });

    console.log("بيانات الجدول للحفظ:", tableData);
    alert("تم حفظ البيانات! تحقق من الـ console.");
  };

  return (
    <div
      className="p-6 overflow-hidden transition-all duration-300 mr-[300px]"
      style={{
        width: "calc(96vw - 260px)",
        marginLeft: "260px",
      }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-bold text-right">الجدول المحاسبي</h2>
        <div className="flex gap-2">
          <button
            onClick={addRow}
            className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            ➕ إضافة يوم
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
          <thead>
            <tr className="bg-blue-300 text-black">
              {columns.map((col, i) => (
                <th key={i} className="border border-gray-400 p-2 whitespace-nowrap">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="border-t">
                {columns.map((col, j) => {
                  if (j === 0) {
                    return (
                      <td key={j} className="border border-gray-300 p-2 font-semibold">
                        اليوم {row.day}
                      </td>
                    );
                  } else if (col === "إجراء") {
                    return (
                      <td key={j} className="border border-gray-300 p-2">
                        <button
                          onClick={() => deleteRow(i)}
                          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                        >
                          ❌ حذف
                        </button>
                      </td>
                    );
                  } else {
                    return (
                      <td key={j} className="border border-gray-300 p-2">
                        <input
                          type="text"
                          value={inputs[i]?.[j] || ""}
                          onChange={(e) => handleInputChange(i, j, e.target.value)}
                          className="w-[100px] text-center border border-gray-300 rounded p-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                        />
                      </td>
                    );
                  }
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
