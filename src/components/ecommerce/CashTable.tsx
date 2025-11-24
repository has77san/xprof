import { useState } from "react";

interface Row {
  date: string;
  dollar: number;
  dinar: number;
  addDollar: number;
  addDinar: number;
  payDollar: number;
  payDinar: number;
}

interface Table {
  id: number;
  rows: Row[];
}

export default function MultiMoneyTables() {
  const [tables, setTables] = useState<Table[]>([
    {
      id: 1,
      rows: [
        {
          date: "",
          dollar: 0,
          dinar: 0,
          addDollar: 0,
          addDinar: 0,
          payDollar: 0,
          payDinar: 0,
        },
      ],
    },
  ]);

  const addNewTable = () => {
    const newTable: Table = {
      id: tables.length + 1,
      rows: [
        {
          date: "",
          dollar: 0,
          dinar: 0,
          addDollar: 0,
          addDinar: 0,
          payDollar: 0,
          payDinar: 0,
        },
      ],
    };
    setTables([...tables, newTable]);
  };

  const addNewRow = (tableIndex: number) => {
    const updatedTables = [...tables];
    updatedTables[tableIndex].rows.push({
      date: "",
      dollar: 0,
      dinar: 0,
      addDollar: 0,
      addDinar: 0,
      payDollar: 0,
      payDinar: 0,
    });
    setTables(updatedTables);
  };

  const updateRow = (
    tableIndex: number,
    rowIndex: number,
    field: keyof Row,
    value: number | string
  ) => {
    const updatedTables = [...tables];
    //@ts-ignore
    updatedTables[tableIndex].rows[rowIndex][field] = value;
    setTables(updatedTables);
  };

  const calculateTotals = (rows: Row[]) => {
    let totalDollar = 0;
    let totalDinar = 0;
    rows.forEach((row) => {
      totalDollar += row.dollar + row.addDollar - row.payDollar;
      totalDinar += row.dinar + row.addDinar - row.payDinar;
    });
    return { totalDollar, totalDinar };
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* زر إضافة جدول جديد فوق على اليسار */}
      <button
        onClick={addNewTable}
        className="mb-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        إضافة صندوق جديد
      </button>

      {tables.map((table, tableIndex) => {
        const totals = calculateTotals(table.rows);
        return (
          <div
            key={table.id}
            className="mb-8 border rounded-lg shadow-md p-4 bg-white"
          >
            {/* عنوان الجدول */}
            <h2 className="text-center text-xl font-bold mb-4">الصندوق</h2>

            {/* التاريخ */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              <label className="font-semibold">التاريخ:</label>
              <input type="date" className="border p-2 rounded" />
            </div>

            {/* رأس الجدول */}
            <div className="grid grid-cols-3 gap-2 bg-gray-200 p-2 font-bold text-center">
              <div>المبلغ بالدولار</div>
              <div>المبلغ بالدينار</div>
              <div>التاريخ</div>
            </div>

            {/* الصفوف */}
            {table.rows.map((row, rowIndex) => (
              <div key={rowIndex} className="border-b pb-4 mb-4">
                {/* المبلغ والتاريخ */}
                <div className="grid grid-cols-3 gap-2 p-2">
                  <input
                    type="number"
                    className="border p-2 rounded"
                    placeholder="دولار"
                    value={row.dollar}
                    onChange={(e) =>
                      updateRow(
                        tableIndex,
                        rowIndex,
                        "dollar",
                        Number(e.target.value)
                      )
                    }
                  />
                  <input
                    type="number"
                    className="border p-2 rounded"
                    placeholder="دينار"
                    value={row.dinar}
                    onChange={(e) =>
                      updateRow(
                        tableIndex,
                        rowIndex,
                        "dinar",
                        Number(e.target.value)
                      )
                    }
                  />
                  <div className="flex">
                    <span className="m-[10px]">المدور من</span>

                    <input
                      type="date"
                      lang="ar"
                      className="border p-2 rounded"
                      value={row.date}
                      onChange={(e) =>
                        updateRow(tableIndex, rowIndex, "date", e.target.value)
                      }
                    />
                  </div>
                </div>

                {/* المقبوضات */}
                <div className="grid grid-cols-3 gap-2 p-2 items-center">
                  <input
                    type="number"
                    className="border p-2 rounded"
                    placeholder="إضافة دولار"
                    value={row.addDollar}
                    onChange={(e) =>
                      updateRow(
                        tableIndex,
                        rowIndex,
                        "addDollar",
                        Number(e.target.value)
                      )
                    }
                  />
                  <input
                    type="number"
                    className="border p-2 rounded"
                    placeholder="إضافة دينار"
                    value={row.addDinar}
                    onChange={(e) =>
                      updateRow(
                        tableIndex,
                        rowIndex,
                        "addDinar",
                        Number(e.target.value)
                      )
                    }
                  />
                  <div className="text-center font-semibold">المقبوضات</div>
                </div>

                {/* المدفوعات */}
                <div className="grid grid-cols-3 gap-2 p-2 items-center">
                  <input
                    type="number"
                    className="border p-2 rounded"
                    placeholder="مدفوع دولار"
                    value={row.payDollar}
                    onChange={(e) =>
                      updateRow(
                        tableIndex,
                        rowIndex,
                        "payDollar",
                        Number(e.target.value)
                      )
                    }
                  />
                  <input
                    type="number"
                    className="border p-2 rounded"
                    placeholder="مدفوع دينار"
                    value={row.payDinar}
                    onChange={(e) =>
                      updateRow(
                        tableIndex,
                        rowIndex,
                        "payDinar",
                        Number(e.target.value)
                      )
                    }
                  />
                  <div className="text-center font-semibold">المدفوعات</div>
                </div>
              </div>
            ))}

            {/* المجموع */}
            <div className="grid grid-cols-3 font-bold text-center bg-gray-100 p-3 rounded mb-4">
              <div>مجموع الدولار: {totals.totalDollar}</div>
              <div>مجموع الدينار: {totals.totalDinar}</div>
              <div>المجموع</div>
            </div>

            {/* زر إضافة صف */}
            <button
              onClick={() => addNewRow(tableIndex)}
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 mb-2"
            >
              إضافة صف جديد
            </button>

            {/* زر حفظ الجدول */}
            <button
              onClick={() => {
                const tableToSave = tables[tableIndex];
                console.log("Saving table:", tableToSave);
                alert(`تم حفظ الصندوق بنجاح ${tableToSave.id} `);
              }}
              className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
            >
              حفظ الصندوق
            </button>
          </div>
        );
      })}
    </div>
  );
}
