import { useState } from "react";

function Receiving_tow() {
  const [senderStatus, setSenderStatus] = useState("");
  const [receiverStatus, setReceiverStatus] = useState("");
  const [bankName, setBankName] = useState("");
  const [phone, setPhone] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [relation, setRelation] = useState("");
  const [transferReason, setTransferReason] = useState("");

  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [agent, setAgent] = useState("");
  const [deliveryCurrency, setDeliveryCurrency] = useState("");
  const [deliveryAmount, setDeliveryAmount] = useState("");
  const [deliveryCommissionType, setDeliveryCommissionType] = useState("");
  const [deliveryCommissionValue, setDeliveryCommissionValue] = useState("");

  const [transferCurrency, setTransferCurrency] = useState("");
  const [transferRate, setTransferRate] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [receiveMethod, setReceiveMethod] = useState("");
  const [receiveAccount, setReceiveAccount] = useState("");
  const [transferCommissionType2, setTransferCommissionType2] = useState("");
  const [transferCommissionValue2, setTransferCommissionValue2] = useState("");

  const [total, setTotal] = useState("");

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
      {/* معلومات المرسل والمستفيد */}
      <div className="border p-4 rounded-lg space-y-4">
        <h2 className="font-bold text-lg">معلومات المرسل والمستفيد</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">اسم المرسل</label>
            <select
              value={senderStatus}
              onChange={(e) => setSenderStatus(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر الحالة</option>
              <option value="مقيم">مقيم</option>
              <option value="غير مقيم">غير مقيم</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">المستفيد</label>
            <select
              value={receiverStatus}
              onChange={(e) => setReceiverStatus(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر الحالة</option>
              <option value="مقيم">مقيم</option>
              <option value="غير مقيم">غير مقيم</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">اسم البنك</label>
            <select
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر البنك</option>
              <option value="البنك 1">البنك 1</option>
              <option value="البنك 2">البنك 2</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">رقم الهاتف</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">رقم الحساب</label>
            <input
              type="text"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">العلاقة بالمستفيد</label>
            <input
              type="text"
              value={relation}
              onChange={(e) => setRelation(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-1">سبب التحويل</label>
            <input
              type="text"
              value={transferReason}
              onChange={(e) => setTransferReason(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      {/* معلومات تسليم الحوالة */}
      <div className="border p-4 rounded-lg space-y-4">
        <h2 className="font-bold text-lg">معلومات تسليم الحوالة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">البلد</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر البلد</option>
              <option value="العراق">العراق</option>
              <option value="سوريا">سوريا</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">المدينة</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر المدينة</option>
              <option value="بغداد">بغداد</option>
              <option value="بابل">بابل</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">الوكيل</label>
            <input
              type="text"
              value={agent}
              onChange={(e) => setAgent(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">عملة التسليم</label>
            <select
              value={deliveryCurrency}
              onChange={(e) => setDeliveryCurrency(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر العملة</option>
              <option value="دينار">دينار</option>
              <option value="دولار">دولار</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">المبلغ</label>
            <input
              type="number"
              value={deliveryAmount}
              onChange={(e) => setDeliveryAmount(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">نوع العمولة</label>
            <select
              value={deliveryCommissionType}
              onChange={(e) => setDeliveryCommissionType(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر النوع</option>
              <option value="نقدي">نقدي</option>
              <option value="نسبة">نسبة</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">قيمة العمولة %</label>
            <input
              type="number"
              value={deliveryCommissionValue}
              onChange={(e) => setDeliveryCommissionValue(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      {/* معلومات مسمى الحوالة */}
      <div className="border p-4 rounded-lg space-y-4">
        <h2 className="font-bold text-lg">معلومات مسمى الحوالة</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">العملة</label>
            <select
              value={transferCurrency}
              onChange={(e) => setTransferCurrency(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر العملة</option>
              <option value="دينار">دينار</option>
              <option value="دولار">دولار</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">السعر</label>
            <input
              type="number"
              value={transferRate}
              onChange={(e) => setTransferRate(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">المبلغ</label>
            <input
              type="number"
              value={transferAmount}
              onChange={(e) => setTransferAmount(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">طريقة القبض</label>
            <select
              value={receiveMethod}
              onChange={(e) => setReceiveMethod(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر الطريقة</option>
              <option value="نقدي">نقدي</option>
              <option value="تحويل بنكي">تحويل بنكي</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">حساب القبض</label>
            <input
              type="text"
              value={receiveAccount}
              onChange={(e) => setReceiveAccount(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>

          <div>
            <label className="block mb-1">نوع العمولة</label>
            <select
              value={transferCommissionType2}
              onChange={(e) => setTransferCommissionType2(e.target.value)}
              className="w-full border rounded p-2"
            >
              <option value="">اختر النوع</option>
              <option value="نقدي">نقدي</option>
              <option value="نسبة">نسبة</option>
            </select>
          </div>

          <div>
            <label className="block mb-1">العمولة %</label>
            <input
              type="number"
              value={transferCommissionValue2}
              onChange={(e) => setTransferCommissionValue2(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
        </div>
      </div>

      {/* الاجمالي */}
      <div className="border p-4 rounded-lg">
        <h2 className="font-bold text-lg">الإجمالي</h2>
        <input
          type="number"
          value={total}
          onChange={(e) => setTotal(e.target.value)}
          className="w-full border rounded p-2 mt-2"
        />
      </div>
    </div>
  );
}

export default Receiving_tow;
