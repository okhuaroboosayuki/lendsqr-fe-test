import { Link, useNavigate } from "react-router-dom";
import type { SideNavProps } from "../types/types";
import useAuth from "../hooks/useAuth";
import SideNavList from "./SideNavList";
import briefcase from "/assets/icons/briefcase.svg";
import arrowDown from "/assets/icons/arrow-down.svg";
import home from "/assets/icons/home.svg";
import userDarkGreyIcon from "/assets/icons/user-dark-grey.svg";
import userGreyIcon from "/assets/icons/users-grey.svg";
import loanSack from "/assets/icons/loan-sack.svg";
import handshake from "/assets/icons/handshake-regular.svg";
import askLoan from "/assets/icons/ask-loan.svg";
import piggyBank from "/assets/icons/piggy-bank.svg";
import userCheckIcon from "/assets/icons/user-check.svg";
import userTimesIcon from "/assets/icons/user-times.svg";
import briefcaseGrey from "/assets/icons/briefcase_grey.svg";
import bankIcon from "/assets/icons/np_bank-icon.svg";
import coins from "/assets/icons/coins-icon.svg";
import twoWayIcon from "/assets/icons/two-way-icon.svg";
import spiralBladeIcon from "/assets/icons/spiral-blade-icon.svg";
import userCogIcon from "/assets/icons/user-cog.svg";
import scrollIcon from "/assets/icons/scroll.svg";
import chartBar from "/assets/icons/chart-bar.svg";
import sliderBars from "/assets/icons/slider-bars.svg";
import badge from "/assets/icons/badge-percent.svg";
import clipboard from "/assets/icons/clipboard-list.svg";
import logOut from "/assets/icons/sign-out.svg";
import doubleArrow from "/assets/icons/double-left-arrow.svg";
// import { useEffect } from "react";

export default function SideNav({ isSideNavOpen, setIsSideNavOpen }: SideNavProps) {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const toggleMenu = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  // useEffect(() => {
  //   // Close the side nav when the window is resized to a smaller width
  //   const handleResize = () => {
  //     if (window.innerWidth < 768) {
  //       setIsSideNavOpen(!isSideNavOpen);
  //     } else {
  //       setIsSideNavOpen(!isSideNavOpen);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [isSideNavOpen, setIsSideNavOpen]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <section className="side_nav_container">
      <aside className={`side_nav ${!isSideNavOpen ? "menu_closed" : ""}`}>
        <section className="side_nav_top">
          <div className={`side_nav_icon ${!isSideNavOpen ? "menu_toggled" : ""}`} onClick={toggleMenu}>
            <img src={doubleArrow} alt="menu expand/collapse icon" width={25} loading="lazy" />
          </div>

          <div className="side_nav-organisation">
            <img src={briefcase} alt="icon" />
            <span>Switch Organization</span>
            <img src={arrowDown} alt="icon" />
          </div>

          <Link to={"/dashboard/users"} className="side_nav-dashboard">
            <img src={home} alt="icon" />
            <span>Dashboard</span>
          </Link>
        </section>

        <section className={`side_nav-group-container`}>
          <div className="side_nav-group">
            <h3 className="side_nav-group-title">customers</h3>
            <ul>
              <SideNavList name="users" icon={userDarkGreyIcon} link={"/dashboard/users"} />
              <SideNavList name="guarantors" icon={userGreyIcon} link={"/guarantors"} />
              <SideNavList name="loans" icon={loanSack} link={"/loans"} />
              <SideNavList name="decision models" icon={handshake} link={"/decision-models"} />
              <SideNavList name="savings" icon={piggyBank} link={"/savings"} />
              <SideNavList name="loan request" icon={askLoan} link={"/loan-request"} />
              <SideNavList name="whitelist" icon={userCheckIcon} link={"/whitelist"} />
              <SideNavList name="karma" icon={userTimesIcon} link={"/karma"} />
            </ul>
          </div>
        </section>

        <section className="side_nav-group-container">
          <div className="side_nav-group">
            <h3 className="side_nav-group-title">settings</h3>
            <ul>
              <SideNavList name="organisation" icon={briefcaseGrey} link={"/organisation"} />
              <SideNavList name="loan products" icon={askLoan} link={"/loan-products"} />
              <SideNavList name="savings products" icon={bankIcon} link={"/savings-products"} />
              <SideNavList name="fees and charges" icon={coins} link={"/fees-and-charges"} />
              <SideNavList name="transactions" icon={twoWayIcon} link={"/transactions"} />
              <SideNavList name="services" icon={spiralBladeIcon} link={"/services"} />
              <SideNavList name="service account" icon={userCogIcon} link={"/service-account"} />
              <SideNavList name="settlements" icon={scrollIcon} link={"/settlements"} />
              <SideNavList name="reports" icon={chartBar} link={"/reports"} />
            </ul>
          </div>
        </section>

        <section className="side_nav-group-container">
          <div className="side_nav-group">
            <h3 className="side_nav-group-title">settings</h3>
            <ul>
              <SideNavList name="preferences" icon={sliderBars} link={"/preferences"} />
              <SideNavList name="fees and pricing" icon={badge} link={"/fees-and-pricing"} />
              <SideNavList name="audits logs" icon={clipboard} link={"/audits-logs"} />
            </ul>
          </div>
        </section>

        <section className="side_nav-group-container">
          <div className="side_nav-group">
            <ul>
              <SideNavList name="logout" icon={logOut} link={handleSignOut} />
              <SideNavList>v1.2.0</SideNavList>
            </ul>
          </div>
        </section>
      </aside>
    </section>
  );
}
