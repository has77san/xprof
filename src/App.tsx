import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
import Videos from "./pages/UiElements/Videos";
import Images from "./pages/UiElements/Images";
import Alerts from "./pages/UiElements/Alerts";
import Badges from "./pages/UiElements/Badges";
import Avatars from "./pages/UiElements/Avatars";
import Buttons from "./pages/UiElements/Buttons";
import LineChart from "./pages/Charts/LineChart";
import BarChart from "./pages/Charts/BarChart";
import Calendar from "./pages/Calendar";
import BasicTables from "./pages/Tables/BasicTables";
import FormElements from "./pages/Forms/FormElements";
import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import CreateForm from "./pages/Forms/CreateForm";
import Selectatt from "./components/ecommerce/Selectatt";
import Selecttwo from "./components/ecommerce/Selecttwo";
import Selectatthree from "./components/ecommerce/Selectatthree";
import Selectatfour from "./components/ecommerce/Selectatfour";
import Attreceiv from "./pages/receiving/Attreceiv";
import Attreceivtow from "./pages/receiving/Attreceivtow";
import Expenses from "./pages/expenses/Expenses";
import Salaries from "./components/ecommerce/Salaries";
import Expensestow from "./components/ecommerce/Expensestow";
import Expensesthree from "./components/ecommerce/Expensesthree";
import Expensesfour from "./components/ecommerce/Expensesfour";
import Expensesfive from "./components/ecommerce/Expensesfive";
import Expenses_six from "./components/ecommerce/Expenses_six";
import Selectattsix from "./components/ecommerce/Selectattsix";
import Selectattseven from "./components/ecommerce/Selectattseven";
import Compliance from "./components/ecommerce/Compliance";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Dashboard Layout */}
        <Route element={<AppLayout />}>
          <Route index path="/" element={<Home />} />

          {/* Others Page */}
          <Route path="/profile" element={<UserProfiles />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/blank" element={<Blank />} />

          {/* Forms */}
          <Route path="/form-elements" element={<FormElements />} />
          <Route path="/attreceiv" element={<Attreceiv />} />
          <Route path="/attreceivtow" element={<Attreceivtow />} />

          {/* Tables */}
          <Route path="/basic-tables" element={<BasicTables />} />

          {/* Ui Elements */}
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/avatars" element={<Avatars />} />
          <Route path="/badge" element={<Badges />} />
          <Route path="/buttons" element={<Buttons />} />
          <Route path="/images" element={<Images />} />
          <Route path="/videos" element={<Videos />} />
           {/* تسجيل الايرادات */}
          <Route path="/selectatt" element={<Selectatt />} />
          <Route path="/selecttwo" element={<Selecttwo />} />
          <Route path="/selectatthree" element={<Selectatthree />} />
          <Route path="/selectatfour" element={<Selectatfour />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/Selectattsix" element={<Selectattsix />} />
          <Route path="/Selectattseven" element={<Selectattseven />} />
          <Route path="/Compliance" element={<Compliance />} />


           {/* تسجيل المصاريف */}

          <Route path="/Salaries" element={<Salaries />} />
          <Route path="/Expensestow" element={<Expensestow />} />
          <Route path="/Expensesthree" element={<Expensesthree />} />
          <Route path="/Expensesfour" element={<Expensesfour />} />
          <Route path="/Expensesfive" element={<Expensesfive />} />
          <Route path="/Expenses_six" element={<Expenses_six />} />


          {/* Charts */}
          <Route path="/line-chart" element={<LineChart />} />
          <Route path="/bar-chart" element={<BarChart />} />
          <Route path="/createform" element={<CreateForm />} />
        </Route>

        {/* Auth Layout */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Fallback Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
