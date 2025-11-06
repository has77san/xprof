import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

export default function Compliance() {
  const [kyc, setKyc] = useState({
    fullName: "",
    phone: "",
    address: "",
    job: "",
    sourceOfFunds: "",
    purpose: "",
    beneficiary: "",
  });

  const handleClear = () => {
    setKyc({
      fullName: "",
      phone: "",
      address: "",
      job: "",
      sourceOfFunds: "",
      purpose: "",
      beneficiary: "",
    });
  };

  const handleSave = () => {
    alert("✅ تم حفظ بيانات الامتثال بنجاح!");
    console.log("بيانات الامتثال:", kyc);
  };

  return (
    <>
      <PageMeta
        title="نظام الامتثال (AML / KYC)"
        description="صفحة الامتثال ضمن نظام الصيرفة - تسجيل بيانات العملاء والتحقق من مصدر الأموال والغرض من العملية"
      />
      <PageBreadcrumb pageTitle="الامتثال (AML / KYC)" />

      <div className="space-y-6 p-6 max-w-4xl mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-2xl border border-gray-200 dark:border-gray-700">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">
          نموذج الامتثال ومعلومات KYC
        </h2>

        

        {/* قسم معلومات الامتثال */}
        <div className="space-y-3 mt-6">
          <h3 className="font-bold text-gray-700">معلومات الامتثال (Anti-Money Laundering)</h3>

          <input
            type="text"
            placeholder="مصدر الأموال (من أين حصلت على هذه الأموال؟)"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded"
            value={kyc.sourceOfFunds}
            onChange={(e) => setKyc({ ...kyc, sourceOfFunds: e.target.value })}
          />

          <input
            type="text"
            placeholder="الغرض من العملية (سفر، تجارة، علاج، تحويل...)"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded"
            value={kyc.purpose}
            onChange={(e) => setKyc({ ...kyc, purpose: e.target.value })}
          />

          <input
            type="text"
            placeholder="المستفيد الحقيقي (هل تقوم بالعملية لنفسك أم لغيرك؟)"
            className="w-full border border-gray-300 dark:border-gray-600 p-2 rounded"
            value={kyc.beneficiary}
            onChange={(e) => setKyc({ ...kyc, beneficiary: e.target.value })}
          />
        </div>

        {/* الأزرار */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleSave}
            className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-6 rounded"
          >
            حفظ البيانات
          </button>

          <button
            onClick={handleClear}
            className="bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-6 rounded border border-gray-400"
          >
            تفريغ الحقول
          </button>
        </div>
      </div>
    </>
  );
}
