import { useState } from "react";

export default function AccountingTable() {
  const [rows, setRows] = useState([{}]);
  const [inputs, setInputs] = useState<{ [key: number]: { [key: number]: string } }>({});

  const mainColumns = [
    "التاريخ",
    "مدين",
    "دائن",
    "التفاصيل",
    "رقم القيد",
    "المبلغ",
  ];

  const groupedColumns = [
    "الموجودات الثابتة",
    "النقود",
    "المطلوبات ورأس المال",
    "الاستخدامات",
    "الإيرادات",
    "الأستاذ العام",
  ];

  const addRow = () => {
    if (rows.length < 30) setRows([...rows, {}]);
  };

  const deleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);

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

      let colIndex = 0;

      // الأعمدة الثابتة
      mainColumns.forEach((col) => {
        rowData[col] = inputs[rowIndex]?.[colIndex] || "";
        colIndex++;
      });

      // الأعمدة المتفرعة (مدين / دائن)
      groupedColumns.forEach((group) => {
        rowData[`${group} - مدين`] = inputs[rowIndex]?.[colIndex] || "";
        colIndex++;
        rowData[`${group} - دائن`] = inputs[rowIndex]?.[colIndex] || "";
        colIndex++;
      });

      return rowData;
    });

    console.log("بيانات الجدول:", tableData);
    alert("تم حفظ البيانات! شاهد الـ console");
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

          {/* ===== الهيدر الصف الأول ===== */}
          <thead>
            <tr className="bg-blue-300 text-black">

              {/* الأعمدة الأساسية */}
              {mainColumns.map((col, i) => (
                <th key={i} rowSpan={2} className="border p-2 whitespace-nowrap">
                  {col}
                </th>
              ))}

              {/* الأعمدة المتفرعة */}
              {groupedColumns.map((group, i) => (
                <th key={i} colSpan={2} className="border p-2 whitespace-nowrap">
                  {group}
                </th>
              ))}

              <th rowSpan={2} className="border p-2 whitespace-nowrap">إجراء</th>
            </tr>

            {/* ===== الهيدر الصف الثاني ===== */}
            <tr className="bg-blue-200 text-black">
              {groupedColumns.map((_, i) => (
                <>
                  <th key={`deb-${i}`} className="border p-2 bg-blue-800 text-white">مدين</th>
                  <th key={`cred-${i}`} className="border p-2 bg-blue-600 text-white">دائن</th>
                </>
              ))}
            </tr>
          </thead>

          {/* ===== جسم الجدول ===== */}
          <tbody>
            {rows.map((_, rowIndex) => {
              // مجموع الأعمدة = 6 أساسية + (6 مجموعات × 2)
              const totalCols = mainColumns.length + groupedColumns.length * 2;

              return (
                <tr key={rowIndex} className="border-t">

                  {/* كل الحقول */}
                  {Array.from({ length: totalCols }).map((_, colIndex) => (
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
