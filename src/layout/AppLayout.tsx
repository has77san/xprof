import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Outlet } from "react-router";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="min-h-screen flex flex-row-reverse">
      {/* السايدبار */}
      <div>
        <AppSidebar />
        <Backdrop />
      </div>

      {/* المحتوى */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:mr-[290px]" : "lg:mr-[90px]"
        } ${isMobileOpen ? "mr-0" : ""}`}
      >
        <AppHeader />

        {/* خلفية الصورة + المحتوى */}
        <div
          className="relative p-4 mx-auto md:p-6 min-h-screen overflow-hidden max-w-[1536px]"
          style={{
            backgroundImage:
              'url("/images/cards/WhatsApp Image 2025-11-05 at 13.45.19_86a5b0c3.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="relative z-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
