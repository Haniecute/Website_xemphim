import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://media.istockphoto.com/id/1283904124/vi/vec-to/vector-logo-cho-r%E1%BA%A1p-chi%E1%BA%BFu-phim-v%E1%BB%9Bi-m%C3%A1y-%E1%BA%A3nh-phim-c%C5%A9.jpg?s=1024x1024&w=is&k=20&c=iK1mX_PmMaQv42FEi7GWH5DXQ4ESe2HY-6TvxvJe64g="

            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <Link to="/mylist " className="link">
          <span>My List</span>
          </Link>
        </div>
        <div className="right">
          <Search className="icon" />
          <Notifications className="icon" />
          <img
            src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1608/tuktukdesign160800048/61010838-user-icon-man-profile-businessman-avatar-person-glyph-vector-illustration.jpg?ver=6"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={() => dispatch(logout())}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
