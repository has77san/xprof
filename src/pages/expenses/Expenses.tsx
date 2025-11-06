import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

const cardData = [
  {
    title: "رواتب والاجور",
    description: "المصاريف المخصصة لدفع رواتب الموظفين وأجور العمل المؤقت أو الإضافي",
    link: "./Salaries",
  },
  {
    title: "المساهمة في الضمانات الاجتماعية",
    description: "المبالغ المدفوعة للحكومة أو صناديق الضمان الاجتماعي عن الموظفين",
    link: "./Expensestow",
  },
  {
    title: "المصاريف السلعية",
    description: "تكلفة شراء المواد والسلع اللازمة للإنتاج أو إعادة البيع بشكل دوري",
    link: "./Expensesthree",
  },
   {
    title: "المصاريف الخدمية",
    description: "تكاليف الخدمات المقدمة مثل الكهرباء، الماء، الإنترنت، والصيانة",
    link: "./Expensesfour",
  },
  {
    title: "المصاريف التحويلية",
    description: "تكاليف القروض والفوائد البنكية والعمولات المتعلقة بالتمويل والعمليات المالية",
    link: "./Expenses_six",
  },
  {
    title: "مصاريف اخرى",
    description: "أي مصاريف لا تندرج ضمن البنود السابقة، مثل الهدايا أو التبرعات",
    link: "./",
  },
];

function Expenses() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="تسجيل المصاريف " />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm p-6 bg-white border border-gray-500 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
          >
            <a href={card.link}>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {card.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {card.description}
            </p>
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

export default Expenses
