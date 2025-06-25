import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import { useState } from "react";

const DashboardLayout = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState<boolean>(true);

  return (
    <div className="dashboard">
      <Header />

      <section className="container">
        <SideNav isSideNavOpen={isSideNavOpen} setIsSideNavOpen={setIsSideNavOpen} />

        <div className="container_content">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default DashboardLayout;
