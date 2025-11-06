import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";

const cardData = [
  {
    title: "ايراد بيع مزاد العملة",
    description:
      "الإيرادات المتحصلة من بيع العملات في المزاد، والتي تعكس القيمة الإجمالية للمبيعات وفق الأسعار المتفق عليها لكل عملة",
    link: "./Selectatt",
  },
  {
    title: "ايراد البطائق الالكترونية",
    description: "الإيرادات المتحصلة من بيع البطاقات الإلكترونية بأنواعها المختلفة، والتي تمثل مجموع المبالغ المحصلة وفق الأسعار المحددة لكل بطاقة.",
    link: "./Selecttwo",
  },
  {
    title: "التعاملات مع الجمهور",
    description: "جميع التعاملات والخدمات المقدمة للجمهور، بما في ذلك الاستفسارات والمدفوعات والمعاملات اليومية لضمان رضا العملاء.",
    link: "./profile",
  },
   {
    title: "عمولة بيع البطائق",
    description: "العمولة المستحقة عن عمليات بيع البطاقات الإلكترونية، المحسوبة كنسبة من قيمة كل عملية بيع وفق السياسات المعتمدة.",
    link: "./Selectatthree",
  },
  {
    title: "تسليم حوالة",
    description: "العمولة المستحقة عن عمليات بيع البطاقات الإلكترونية، المحسوبة كنسبة من قيمة كل عملية بيع وفق السياسات المعتمدة.",
    link: "./Attreceivtow",
  },
  {
    title: "استلام حوالة",
    description: "العمولة المستحقة عن عمليات بيع البطاقات الإلكترونية، المحسوبة كنسبة من قيمة كل عملية بيع وفق السياسات المعتمدة.",
    link: "./Attreceiv",
  },
 
 
  {
    title: "بطاقة تعريف",
    description: "العمولة المستحقة عن عمليات بيع البطاقات الإلكترونية، المحسوبة كنسبة من قيمة كل عملية بيع وفق السياسات المعتمدة.",
    link: "./selectatfour",
  },
];

export default function FormElements() {
  return (
    <div>
      <PageMeta
        title="React.js Form Elements Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Form Elements  Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="تسجيل الايرادات " />

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
  );
}
