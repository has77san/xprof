import { useState } from "react";
import ComponentCard from "../../components/common/ComponentCard";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

interface FormItem {
  amount: string;
}

interface CardItem {
  title: string;
  optionsFrom: string[];
  optionsTo: string[];
  description: string; // ✅ أضفنا وصف لكل كارد
}

function Salaries() {
  const cards: CardItem[] = [
    {
      title: "تسجيل الرواتب",
      optionsFrom: ["رواتب والاجور"],
      optionsTo: ["نقدية بالصندوق", "الدائنون"],
      description:
        "وذالك عن دفع رواتب الموظفين خلال الفترة",
    },
    {
      title: "تسجيل الاجور",
      optionsFrom: ["رواتب والاجور"],
      optionsTo: ["نقدية بالصندوق", "الدائنون"],
      description:
        "وذالك عن دفع اجور الموظفين خلال الفترة",
    },
  ];

  const [isVisible, setIsVisible] = useState<boolean[]>(cards.map(() => false));
  const [fromForms, setFromForms] = useState<FormItem[][]>(
    cards.map(() => [{ amount: "" }])
  );
  const [toForms, setToForms] = useState<FormItem[][]>(
    cards.map(() => [{ amount: "" }])
  );

  const toggleVisibility = (index: number) => {
    setIsVisible((prev) => prev.map((v, i) => (i === index ? !v : v)));
  };

  const addNewForm = (cardIndex: number, formIndex: number, type: "from" | "to") => {
    if (type === "from") {
      setFromForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex].splice(formIndex + 1, 0, { amount: "" });
        return copy;
      });
    } else {
      setToForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex].splice(formIndex + 1, 0, { amount: "" });
        return copy;
      });
    }
  };

  const handleAmountChange = (
    cardIndex: number,
    formIndex: number,
    type: "from" | "to",
    value: string
  ) => {
    if (type === "from") {
      setFromForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex][formIndex].amount = value;
        return copy;
      });
    } else {
      setToForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex][formIndex].amount = value;
        return copy;
      });
    }
  };

  const handleDeleteForm = (cardIndex: number, formIndex: number, type: "from" | "to") => {
    if (type === "from") {
      setFromForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex] = copy[cardIndex].filter((_, i) => i !== formIndex);
        return copy;
      });
    } else {
      setToForms((prev) => {
        const copy = prev.map((arr) => [...arr]);
        copy[cardIndex] = copy[cardIndex].filter((_, i) => i !== formIndex);
        return copy;
      });
    }
  };

  return (
    <>
      <PageMeta title="" description=" " />
      <PageBreadcrumb pageTitle="رواتب والاجور" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className="rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            {/* العنوان */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {card.title}
              </h3>
              <button
                onClick={() => toggleVisibility(cardIndex)}
                className="border border-gray-300 dark:border-gray-600 
                  bg-gray-50 dark:bg-gray-700 
                  text-gray-800 dark:text-white 
                  px-4 py-1.5 rounded-lg 
                  transition duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
              >
                {isVisible[cardIndex] ? "إخفاء" : "إنشاء جديد"}
              </button>
            </div>

            {/* المحتوى */}
            {isVisible[cardIndex] && (
              <ComponentCard title="">
                <div dir="rtl" className="space-y-5">
                  {/* من حساب */}
                  <div>
                    {fromForms[cardIndex].map((form, formIndex) => (
                      <form
                        key={`from-${cardIndex}-${formIndex}`}
                        className="flex items-center gap-3 mb-3"
                      >
                        <input
                          type="number"
                          placeholder="ادخل المبلغ"
                          value={form.amount}
                          onChange={(e) =>
                            handleAmountChange(cardIndex, formIndex, "from", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200 w-[10%]">
                          من ح /
                        </h4>

                        <select
                          dir="rtl"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                          {card.optionsFrom.map((opt, i) => (
                            <option key={i} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => addNewForm(cardIndex, formIndex, "from")}
                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteForm(cardIndex, formIndex, "from")}
                            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                          >
                            X
                          </button>
                        </div>
                      </form>
                    ))}
                  </div>

                  {/* إلى حساب */}
                  <div>
                    {toForms[cardIndex].map((form, formIndex) => (
                      <form
                        key={`to-${cardIndex}-${formIndex}`}
                        className="flex items-center gap-3 mb-3"
                      >
                        <input
                          type="number"
                          placeholder="ادخل المبلغ"
                          value={form.amount}
                          onChange={(e) =>
                            handleAmountChange(cardIndex, formIndex, "to", e.target.value)
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        />
                        <h4 className="font-semibold w-[10%] text-gray-800 dark:text-gray-200 mb-3">
                          إلى ح /
                        </h4>

                        <select
                          dir="rtl"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
                            focus:ring-blue-500 focus:border-blue-500 block w-1/3 p-2.5 
                            dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        >
                          {card.optionsTo.map((opt, i) => (
                            <option key={i} value={opt}>
                              {opt}
                            </option>
                          ))}
                        </select>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => addNewForm(cardIndex, formIndex, "to")}
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteForm(cardIndex, formIndex, "to")}
                            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                          >
                            X
                          </button>
                        </div>
                      </form>
                    ))}

                    {/* ✅ صندوق الوصف أسفل "إلى ح /" */}
                    <div className="mt-4 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-3 text-sm text-gray-700 dark:text-gray-200 leading-relaxed">
                      {card.description}
                    </div>
                  </div>
                </div>
              </ComponentCard>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Salaries;
