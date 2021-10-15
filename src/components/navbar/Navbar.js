import "./Navbar.css";
import avatar from "../../assets/man.png";
import clock from "../../assets/clock.png";
import menu from "../../assets/menu.png";
import search from "../../assets/search.png"

const Navbar = ({sidebarOpen, openSidebar}) => {

    return (

        <nav className ="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
            <img width="30" src={menu} alt="avatar"/>
            </div>

            <div className="navbar__left">
                <a href="#">Sales</a>
                <a href="#">Report</a>
                <a className ="active_link" href ="#">Admin</a>

            </div>

            <div className="navbar__right">
                <a href="#">
                <img width="30" src={search} alt="avatar"/>

                </a>
                <a href="#">
                <img width="30" src={clock} alt="avatar"/>
                </a>
                <a href="#">
                    <img width="30" src={avatar} alt="avatar"/>
                </a>
            </div>
        </nav>
    )

}

export default Navbar