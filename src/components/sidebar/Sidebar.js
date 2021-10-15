import "./Sidebar.css";
import logo from "../../assets/man.png";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div className="sidebar__img">
          <img src={logo} alt="logo" />
          <h1>  Username</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <a href="#">Dashboard</a>
        </div>
        <h2>Menu</h2>
        <div className="sidebar__link">
          <i className="fa fa-eye" aria-hidden="true"></i>
          <a href="#">Overview</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-shopping-bag"></i>
          <a href="#">Orders</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-product-hunt"></i>
          <a href="#">Products</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-cogs"></i>
          <a href="#">Settings</a>
        </div>
       
        <h2>Business</h2>
        <div className="sidebar__link">
          <i className="fa fa-truck"></i>
          <a href="#">Shipment</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-users"></i>
          <a href="#">Employee</a>
        </div>
        
      </div>
    </div>
  );
};

export default Sidebar;