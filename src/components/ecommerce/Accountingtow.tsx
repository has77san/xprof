import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

const cardData = [
  {
    title: "الشهر الاول",
    link: "./AccountingTable",
  },
  {
    title: "الشهر الثاني",
    link: "./AccountingTable",
  },
  {
    title: "الشهر الثالث",
    link: "./AccountingTable",
  },
   {
    title: "الشهر الرابع",
    link: "./AccountingTable",
  },
  {
    title: "الشهر الخامس",
    link: "./AccountingTable",
  },
  {
    title: "الشهر السادس",
    link: "./AccountingTable",
  },
  {
    title: "الشهر السابع",
    link: "./AccountingTable",
  },
  {
    title: "الشهر الثامن",
    link: "./AccountingTable",
  },
  {
    title: "الشهر التاسع",
    link: "./AccountingTable",
  },
  {
    title: "الشهر العاشر",
    link: "./AccountingTable",
  },
  {
    title: "الشهر الحادي عشر",
    link: "./AccountingTable",
  },
  {
    title: "الشهر الثثاني عشر",
    link: "./AccountingTable",
  },
];

function Accountingtow() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="تسجيل المصاريف " />

      <div className="grid gap-2  lg:grid-cols-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-500 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 w-[200px]"
          >
            <a href={card.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
            </a>
           
            <a
              href={card.link}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              اضغط هنا
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Accountingtow
