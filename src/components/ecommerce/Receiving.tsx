function Receiving({
  branch = "رئيسي",
  deliveryCurrency = "دينار عراقي",
  commissionType = "نقدي",
  commissionValue = 0,
  transferCurrency = "دينار عراقي",
  transferCommissionType = "نقدي",
  transferCommissionValue = 0,
  incomingNumber = "",
  account = "",
  price = 1,
  country = "العراق",
  city = "بغداد",

  senderName = "",
  senderStatus = "مقيم",
  senderBank = "",
  senderPhone = "",
  senderAccount = "",
  senderReason = "",

  recipientName = "",
  recipientStatus = "مقيم",
  recipientBank = "",
  recipientPhone = "",
  recipientAccount = "",
  recipientRelation = "",
  recipientReason = "",

  onSave = () => {},
}: {
  branch?: string;
  deliveryCurrency?: string;
  commissionType?: string;
  commissionValue?: number;
  transferCurrency?: string;
  transferCommissionType?: string;
  transferCommissionValue?: number;
  incomingNumber?: string;
  account?: string;
  price?: number;
  country?: string;
  city?: string;

  senderName?: string;
  senderStatus?: string;
  senderBank?: string;
  senderPhone?: string;
  senderAccount?: string;
  senderReason?: string;

  recipientName?: string;
  recipientStatus?: string;
  recipientBank?: string;
  recipientPhone?: string;
  recipientAccount?: string;
  recipientRelation?: string;
  recipientReason?: string;

  onSave?: () => void;
}) {
  const inputClass =
    "w-full border rounded-lg p-2 bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 transition-colors duration-300";

  const labelClass = "block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300";

  return (
    <div
      dir="rtl"
      className="shadow-md bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 max-w-6xl mx-auto transition-colors duration-300"
    >
      {/* القسم الأول: معلومات تسليم الحوالة */}
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">
        معلومات تسليم الحوالة
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div>
          <label className={labelClass}>الفرع</label>
          <input type="text" value={branch} readOnly className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>عملة التسليم</label>
          <select className={inputClass} defaultValue={deliveryCurrency}>
            <option>دينار عراقي</option>
            <option>دولار أمريكي</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>نوع العمولة</label>
          <select className={inputClass} defaultValue={commissionType}>
            <option>نقدي</option>
            <option>بنكي</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>قيمة العمولة %</label>
          <input
            type="number"
            value={commissionValue.toString()}
            className={inputClass}
          />
        </div>
      </div>

      {/* القسم الثاني: معلومات الحوالة */}
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 border-t pt-4 mb-4">
        معلومات الحوالة
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className={labelClass}>العملة</label>
          <select className={inputClass} defaultValue={transferCurrency}>
            <option>دينار عراقي</option>
            <option>دولار أمريكي</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>نوع العمولة</label>
          <select className={inputClass} defaultValue={transferCommissionType}>
            <option>نقدي</option>
            <option>بنكي</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>قيمة العمولة %</label>
          <input
            type="number"
            value={transferCommissionValue.toString()}
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>الرقم الوارد</label>
          <input type="text" value={incomingNumber} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>الحساب</label>
          <input type="text" value={account} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>السعر</label>
          <input type="number" value={price.toString()} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>البلد المصدر</label>
          <select className={inputClass} defaultValue={country}>
            <option>العراق</option>
            <option>السعودية</option>
            <option>الإمارات</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>المدينة</label>
          <select className={inputClass} defaultValue={city}>
            <option>بغداد</option>
            <option>النجف</option>
            <option>البصرة</option>
          </select>
        </div>
      </div>

      {/* القسم الثالث: معلومات المرسل */}
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 border-t pt-4 mb-4">
        معلومات المرسل
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className={labelClass}>اسم المرسل</label>
          <input type="text" value={senderName} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>صفته</label>
          <select className={inputClass} defaultValue={senderStatus}>
            <option>مقيم</option>
            <option>غير مقيم</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>اسم البنك</label>
          <input type="text" value={senderBank} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>رقم الهاتف</label>
          <input type="text" value={senderPhone} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>رقم الحساب</label>
          <input type="text" value={senderAccount} className={inputClass} />
        </div>

        <div className="md:col-span-3">
          <label className={labelClass}>بيان السبب</label>
          <textarea rows={2} value={senderReason} className={inputClass}></textarea>
        </div>
      </div>

      {/* القسم الرابع: معلومات المستفيد */}
      <h2 className="text-lg font-bold text-gray-800 dark:text-gray-100 border-t pt-4 mb-4">
        معلومات المستفيد
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className={labelClass}>اسم المستفيد</label>
          <input type="text" value={recipientName} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>صفته</label>
          <select className={inputClass} defaultValue={recipientStatus}>
            <option>مقيم</option>
            <option>غير مقيم</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>اسم البنك</label>
          <input type="text" value={recipientBank} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>رقم الهاتف</label>
          <input type="text" value={recipientPhone} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>رقم الحساب</label>
          <input type="text" value={recipientAccount} className={inputClass} />
        </div>

        <div>
          <label className={labelClass}>العلاقة بالمستفيد</label>
          <input type="text" value={recipientRelation} className={inputClass} />
        </div>

        <div className="md:col-span-3">
          <label className={labelClass}>بيان السبب</label>
          <textarea rows={2} value={recipientReason} className={inputClass}></textarea>
        </div>
      </div>

      {/* زر الحفظ */}
      <div className="flex justify-end mt-6">
        <button
          onClick={onSave}
          className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300"
        >
          حفظ التحويل
        </button>
      </div>
    </div>
  );
}

export default Receiving;
