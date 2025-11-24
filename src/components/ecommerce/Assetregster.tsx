import { useState } from "react";

export default function Assetregster() {
  const [rows, setRows] = useState([{}]);
  const [inputs, setInputs] = useState<{ [key: number]: { [key: number]: string } }>({});

  // الأعمدة الأساسية
  const mainColumns = ["التفاصيل", "رقم المستند", "تاريخ الشراء", "الكلفة الدينار"];

  // السنوات (الأعمدة المتفرعة)
  const [groupedColumns, setGroupedColumns] = useState(["سنة 2025"]);

  // إضافة صف
  const addRow = () => {
    if (rows.length < 30) setRows([...rows, {}]);
  };

  // حذف صف
  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);

    const newInputs = { ...inputs };
    delete newInputs[index];
    setInputs(newInputs);
  };

  // تغيير قيمة حقل
  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {
    setInputs((prev) => ({
      ...prev,
      [rowIndex]: {
        ...prev[rowIndex],
        [colIndex]: value,
      },
    }));
  };

  // إضافة سنة جديدة
  const addYear = () => {
    const nextYear = `سنة ${2025 + groupedColumns.length}`;
    setGroupedColumns([...groupedColumns, nextYear]);
  };

  // حفظ البيانات
  const handleSave = () => {
    const tableData = rows.map((_, rowIndex) => {
      const rowData: { [key: string]: string } = {};
      let colIndex = 0;

      // الأعمدة الأساسية
      mainColumns.forEach((col) => {
        rowData[col] = inputs[rowIndex]?.[colIndex] || "";
        colIndex++;
      });

      // السنوات (كل سنة 3 أعمدة)
      groupedColumns.forEach((group) => {
        rowData[`${group} - الاندثار السنوي (دينار)`] = inputs[rowIndex]?.[colIndex] || "";
        colIndex++;
        rowData[`${group} - الاندثار المتراكم (دينار)`] = inputs[rowIndex]?.[colIndex] || "";
        colIndex++;
        rowData[`${group} - الرصيد (دينار)`] = inputs[rowIndex]?.[colIndex] || "";
        colIndex++;
      });

      return rowData;
    });

    console.log("بيانات الجدول:", tableData);
    alert("✔ تم حفظ البيانات بنجاح");
  };

  return (
    <div
      className="p-6 overflow-hidden transition-all duration-300 mr-[300px]"
      style={{ width: "calc(96vw - 260px)", marginLeft: "260px" }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl text-white font-bold text-right">الجدول المحاسبي</h2>

        <div className="flex gap-2">
          <button
            onClick={addYear}
            className="bg-purple-600 text-white px-4 py-2 rounded-xl hover:bg-purple-700 transition"
          >
            ➕ إضافة سنة
          </button>

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
          <thead>
            <tr className="bg-blue-300 text-black">
              {mainColumns.map((col, i) => (
                <th key={i} rowSpan={2} className="border p-2 whitespace-nowrap">
                  {col}
                </th>
              ))}

              {groupedColumns.map((group, i) => (
                <th key={i} colSpan={3} className="border p-2 whitespace-nowrap">
                  {group}
                </th>
              ))}

              <th rowSpan={2} className="border p-2 whitespace-nowrap">إجراء</th>
            </tr>

            <tr className="bg-blue-200 text-black">
              {groupedColumns.map((_, i) => (
                <>
                  <th key={`annual-${i}`} className="border p-2 bg-blue-800 text-white">
                    الاندثار السنوي بالدينار
                  </th>
                  <th key={`acc-${i}`} className="border p-2 bg-blue-700 text-white">
                    الاندثار المتراكم بالدينار
                  </th>
                  <th key={`bal-${i}`} className="border p-2 bg-blue-600 text-white">
                    الرصيد بالدينار
                  </th>
                </>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((_, rowIndex) => {
              const totalCols = mainColumns.length + groupedColumns.length * 3;

              return (
                <tr key={rowIndex} className="border-t">
                  {Array.from({ length: totalCols }).map((_, colIndex) => (
                    <td key={colIndex} className="border p-2">
                      <textarea
                        value={inputs[rowIndex]?.[colIndex] || ""}
                        onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = "auto";
                          target.style.height = `${target.scrollHeight}px`;
                        }}
                        className="min-w-[110px] text-center border border-gray-300 rounded p-2 text-base 
                                   focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white 
                                   resize-none overflow-hidden"
                      />
                    </td>
                  ))}

                  <td className="border p-2">
                    <button
                      onClick={() => deleteRow(rowIndex)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                    >
                      ❌ حذف
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
