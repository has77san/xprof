// src/components/CashTable.tsx
import React, { useState } from "react";

interface Entry {
  date: string;
  details: string;
  amountIQD: number;
  amountUSD: number;
}

const CashTable: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [form, setForm] = useState<Entry>({
    date: "",
    details: "",
    amountIQD: 0,
    amountUSD: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name.includes("amount") ? Number(value) : value });
  };

  const handleAdd = () => {
    setEntries([...entries, form]);
    setForm({ date: "", details: "", amountIQD: 0, amountUSD: 0 });
  };

  const totalIQD = entries.reduce((sum, e) => sum + e.amountIQD, 0);
  const totalUSD = entries.reduce((sum, e) => sum + e.amountUSD, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center bg-blue-100 p-2">الصندوق</h1>
      <table className="w-full border border-gray-300 text-center">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">التاريخ</th>
            <th className="border px-2 py-1">التفاصيل</th>
            <th className="border px-2 py-1">المبلغ بالدينار</th>
            <th className="border px-2 py-1">المبلغ بالدولار</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {entries.map((e, i) => (
            <tr key={i}>
              <td className="border px-2 py-1">{e.date}</td>
              <td className="border px-2 py-1">{e.details}</td>
              <td className="border px-2 py-1">{e.amountIQD.toLocaleString()}</td>
              <td className="border px-2 py-1">${e.amountUSD.toLocaleString()}</td>
            </tr>
          ))}
          <tr className="font-bold bg-gray-200">
            <td className="border px-2 py-1" colSpan={2}>المجموع</td>
            <td className="border px-2 py-1">{totalIQD.toLocaleString()}</td>
            <td className="border px-2 py-1">${totalUSD.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      {/* Form لإضافة بيانات جديدة */}
      <div className="mt-4 flex flex-col gap-2 bg-white">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="border px-2 py-1"
        />
        <input
          type="text"
          name="details"
          placeholder="التفاصيل"
          value={form.details}
          onChange={handleChange}
          className="border px-2 py-1"
        />
        <input
          type="number"
          name="amountIQD"
          placeholder="المبلغ بالدينار"
          value={form.amountIQD}
          onChange={handleChange}
          className="border px-2 py-1"
        />
        <input
          type="number"
          name="amountUSD"
          placeholder="المبلغ بالدولار"
          value={form.amountUSD}
          onChange={handleChange}
          className="border px-2 py-1"
        />
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          إضافة
        </button>
      </div>
    </div>
  );
};

export default CashTable;
