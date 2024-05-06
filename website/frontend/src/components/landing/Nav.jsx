import React from "react";
import img1 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import headimg from "../../assets/sunset-1634374_640.jpg";
function Nav() {
  const bStyle = {
    backgroundImage: `url(${headimg})`,
  };

  return (
    <>
      <nav style={bStyle}>
        <div className="container2">
          <div className="links-brand">
            <ul className="nav-links">
              <NavLink to="/">
                <li>
                  <a>الرئيسية</a>
                </li>
              </NavLink>

              <NavLink to="/service">
                <li>
                  <a>الخدمات</a>
                </li>
              </NavLink>

              <NavLink to="/shipping">
                <li>
                  <a>الشحن والتوصيل</a>
                </li>
              </NavLink>

              <NavLink to="/payment">
                <li>
                  <a>طرق الدفع</a>
                </li>
              </NavLink>

              <NavLink to="/contact">
                <li>
                  <a>الاتصال بنا</a>
                </li>
              </NavLink>

              <NavLink to="/about">
                <li>
                  <a>نبذة عنا</a>
                </li>
              </NavLink>
            </ul>
            <div className="brand">
              <img src={img1} loading="lazy" height="50px" width="150px" />
            </div>
          </div>
        </div>
        <div className="head-text">
          <div className="container3">
            <h1>فرصتكم للطلب من الإمارات العربية المتحدة</h1>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
