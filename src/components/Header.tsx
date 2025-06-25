import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import favicon from "/assets/Union.svg";
import searchIcon from "/assets/icons/search-icon.svg";
import notificationIcon from "/assets/icons/notification-icon.svg";
import dropDownIcon from "/assets/icons/dropdown-icon.svg";
import avatar from "/assets/images/user-avatar.png";

const Header = () => {
  return (
    <header className="dashboard_header">
      <div className="header_left">
        <Link to={"/dashboard/users"}>
          <img src={logo} alt="LendSqr's logo" className="logo_1" />
          <img src={favicon} alt="LendSqr's logo" className="logo_2" />
        </Link>

        <div className="search_wrapper">
          <input type="search" name="search" id="search" className="search_input" />
          <div className="search_icon_wrapper">
            <img src={searchIcon} alt="search icon" />
          </div>
        </div>
      </div>

      <div className="header_right">
        <Link to={"/docs"} className="nav_link">
          Docs
        </Link>

        <img src={notificationIcon} alt="notification" className="notification_icon" />

        <div className="avatar_wrapper">
          <img src={avatar} alt="User's image" loading="lazy" />

          <div className="user_name">
            <a href="#">bola</a>
            <img src={dropDownIcon} alt="dropdown icon" />
          </div>
        </div>
      </div>

      <div className="mobile_menu_wrapper">
        <Link to={"/dashboard"} className="mobile_nav_link">
          Profile
        </Link>
        <Link to={"/dashboard"} className="mobile_nav_link">
          Docs
        </Link>
        <Link to={"/dashboard"} className="mobile_nav_link">
          Notifications
        </Link>
      </div>
    </header>
  );
};

export default Header;
