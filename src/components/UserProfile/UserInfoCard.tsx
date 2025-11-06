import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";

interface FormItem {
  amount: string;
}

interface CardItem {
  title: string;
  optionsFrom: string[];
  optionsTo: string[];
  description: string;
}

export default function CurrencyExchange() {
  const [paymentType, setPaymentType] = useState("");
  const [previousBalance, setPreviousBalance] = useState(0);
  const [currentBalance, setCurrentBalance] = useState(0);
  const [dollarAmount, setDollarAmount] = useState("");
  const [transactionType, setTransactionType] = useState("");

  // بيانات العميل KYC
  const [customerName, setCustomerName] = useState("");
  const [idType, setIdType] = useState("");
  const [, setIdFile] = useState<File | null>(null);
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [job, setJob] = useState("");

  const handlePaymentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setPaymentType(value);

    if (value === "نقدي") {
      setPreviousBalance(5000);
      setCurrentBalance(5000);
    } else {
      setPreviousBalance(0);
      setCurrentBalance(0);
    }
  };

  const handleDollarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setDollarAmount(value);

    const num = parseFloat(value) || 0;
    setCurrentBalance(previousBalance - num);
  };

  const handleClear = () => {
    setPaymentType("");
    setPreviousBalance(0);
    setCurrentBalance(0);
    setDollarAmount("");
    setTransactionType("");

    // مسح بيانات العميل
    setCustomerName("");
    setIdType("");
    setIdFile(null);
    setPhone("");
    setAddress("");
    setJob("");
  };

  // الحسابات المالية
  const dollarValue = parseFloat(dollarAmount) || 0;
  const buyPrice = 1320;
  const sellPrice = 1320;
  const buyFee = dollarValue ? (dollarValue * buyPrice) / 400 : 0;
  const sellFee = dollarValue ? (dollarValue * sellPrice) / 200 : 0;
  const buyTotal = dollarValue ? dollarValue * buyPrice - buyFee : 0;
  const sellTotal = dollarValue ? dollarValue * sellPrice + sellFee : 0;





  ////////////////////////////////////////////////////////////////////////////////////////////////




  const cards: CardItem[] = [
      {
        title: "",
        optionsFrom: ["نقدية بالصندوق",],
        optionsTo: ["ايراد بيع للجمهور"],
        description:
          "وذالك عن عمولة ايراد بيع للجمهور",
      },
     
      {
        title: "",
        optionsFrom: ["خسائر راسمالية",],
        optionsTo: ["نقدية بالصندوق"],
        description:
          "وذالك عن احتساب خسائر راسمالية",
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
  
    const addNewForm = (
      cardIndex: number,
      formIndex: number,
      type: "from" | "to"
    ) => {
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
  
    const handleDeleteForm = (
      cardIndex: number,
      formIndex: number,
      type: "from" | "to"
    ) => {
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
      <PageMeta
        title="صفحة الصيرفة"
        description="إدارة عمليات بيع وشراء الدولار وحساب الرصيد والعمولات"
      />
      <PageBreadcrumb pageTitle="" />

      <div className="space-y-6 p-6 max-w-5xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
          عمليات الصيرفة
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column: Form Inputs */}
          <div className="space-y-4">
            {/* بيانات العميل KYC */}

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                الاسم الرباعي
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                المستمسك
              </label>
              <select
                className="col-span-1 border border-gray-400 p-1 rounded"
                value={idType}
                onChange={(e) => setIdType(e.target.value)}
              >
                <option value=""></option>
                <option value="بطاقة وطنية">بطاقة وطنية</option>
                <option value="هوية أحوال">هوية أحوال</option>
              </select>
              <input
                type="file"
                accept=".jpg,.png,.pdf"
                onChange={(e) => setIdFile(e.target.files ? e.target.files[0] : null)}
                className="col-span-1 border border-gray-400 p-1 rounded ml-2"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                الهاتف
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                العنوان
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                المهنة
              </label>
              <input
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                className="col-span-2 border border-gray-400 p-1 rounded"
              />
            </div>

            {/* باقي الحقول الأصلية */}
            <div className="grid grid-cols-3 items-center mt-4">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                نوع الحركة
              </label>
              <select
                className="col-span-2 border border-gray-400 p-1 rounded bg-white"
                value={transactionType}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option></option>
                <option>شراء دولار</option>
                <option>بيع دولار</option>
              </select>
            </div>

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                نوع الدفع
              </label>
              <select
                className="col-span-2 border border-gray-400 p-1 rounded bg-white"
                value={paymentType}
                onChange={handlePaymentChange}
              >
                <option></option>
                <option>ذمم</option>
                <option>نقدي</option>
              </select>
            </div>

            {paymentType === "ذمم" && (
              <div className="grid grid-cols-3 items-center">
                <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                  اسم الحساب
                </label>
                <select className="col-span-2 border border-gray-400 p-1 rounded bg-white">
                  <option></option>
                  <option>العملاء</option>
                  <option>الموردين</option>
                  <option>البنك</option>
                  <option>الحرير</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-3 items-center">
              <label className="font-bold w-[100px] flex items-center justify-center bg-blue-800 text-white rounded-[3px]">
                دولار
              </label>
              <div className="col-span-2 flex items-center border border-gray-400 rounded px-2">
                <span className="text-gray-600 font-bold mr-1">$</span>
                <input
                  type="number"
                  value={dollarAmount}
                  onChange={handleDollarChange}
                  className="w-full p-1 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: الرصيد والحسابات */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-2">
                <div className="bg-green-600 text-white text-center py-1 rounded-t font-bold">
                  رصيد سابق
                </div>
                <div className="flex items-center border border-gray-400 rounded px-2 mt-2">
                  <span className="text-gray-600 font-bold mr-1">$</span>
                  <input
                    type="text"
                    readOnly
                    value={previousBalance.toLocaleString()}
                    className="w-full text-center font-bold text-lg p-2 outline-none"
                  />
                </div>
              </div>

              <div className="p-2">
                <div className="bg-green-600 text-white text-center py-1 rounded-t font-bold">
                  رصيد حالي
                </div>
                <div className="flex items-center border border-gray-400 rounded px-2 mt-2">
                  <span className="text-gray-600 font-bold mr-1">$</span>
                  <input
                    type="text"
                    readOnly
                    value={currentBalance.toLocaleString()}
                    className="w-full text-center font-bold text-lg p-2 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* المعلومات المالية حسب نوع العملية */}
            {transactionType && (
              <div className="mt-4 p-3 border-t border-gray-300">
                {transactionType === "شراء دولار" ? (
                  <div>
                    <p>سعر الشراء: {buyPrice.toLocaleString()} دينار</p>
                    <p>عمولة الشراء: {buyFee.toLocaleString()} دينار</p>
                    <p>
                      المبلغ الإجمالي المدفوع للعميل:{" "}
                      <strong>{buyTotal.toLocaleString()} دينار</strong>
                    </p>
                  </div>
                ) : (
                  <div>
                    <p>سعر البيع: {sellPrice.toLocaleString()} دينار</p>
                    <p>عمولة البيع: {sellFee.toLocaleString()} دينار</p>
                    <p>
                      المبلغ الإجمالي المستلم من العميل:{" "}
                      <strong>{sellTotal.toLocaleString()} دينار</strong>
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* أزرار الحفظ والتفريغ */}
        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-8 rounded"
          >
            حفظ
          </button>

          <button
            onClick={handleClear}
            className="bg-red-300 text-black font-bold py-2 px-6 rounded border border-gray-400"
          >
            تفريغ الحقول
          </button>
        </div>
      </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className="rounded-2xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-colors duration-300"
          >
            {/* عنوان الكارد وزر الإظهار */}
            <div className="flex flex-col px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-center">
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

              {/* ✅ صندوق الشرح */}
              
            </div>

            {/* محتوى الكارد */}
            {isVisible[cardIndex] && (
              <ComponentCard title="">
                <div dir="rtl" className="space-y-5">
                  {/* قسم من حساب */}
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
                            handleAmountChange(
                              cardIndex,
                              formIndex,
                              "from",
                              e.target.value
                            )
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
                            onClick={() =>
                              addNewForm(cardIndex, formIndex, "from")
                            }
                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteForm(cardIndex, formIndex, "from")
                            }
                            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                          >
                            X
                          </button>
                        </div>
                        
                      </form>
                    ))}
                  </div>

                  {/* قسم إلى حساب */}
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
                            handleAmountChange(
                              cardIndex,
                              formIndex,
                              "to",
                              e.target.value
                            )
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
                            onClick={() =>
                              addNewForm(cardIndex, formIndex, "to")
                            }
                            className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleDeleteForm(cardIndex, formIndex, "to")
                            }
                            className="px-3 py-1 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                          >
                            X
                          </button>
                        </div>
                        
                      </form>
                      
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700 p-3 rounded-lg border border-gray-200 dark:border-gray-600 leading-relaxed">
                {card.description}
              </p>
                </div>
              </ComponentCard>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
