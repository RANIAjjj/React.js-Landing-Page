import React from "react";
import img6 from "../../assets/img6.avif";
import img7 from "../../assets/img7.avif";
import img1 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import headimg from "../../assets/sunset-1634374_640.jpg";
function About() {
  const bStyle = {
    backgroundImage: `url(${headimg})`,
  };
  return (
    <>
      <nav className="new-nav" style={bStyle}>
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
        <div className="new-head-text">
          <div className="container3">
            <h1>نبذة عنا</h1>
          </div>
        </div>
      </nav>

      <section>
        <p className="section-text">نبذة عنا</p>
        <div className="aboutus">
          <div className="about-card-container">
            <div className="about-img">
              <img src={img6} loading="lazy" width="480vh" />
            </div>
            <div className="about-card">
              <h5>فرصتكم للطلب من الإمارات العربية المتحدة</h5>
              <p>
                نقدم لكم خدمة طلب جميع المنتجات والبضائع بسعر جملة أو مفرق
                للتجار والافراد من داخل الإمارات العربية المتحدة لجميع مناطق
                اليمن خلال مدة وجيزة جداً وبخطوات بسيطة
              </p>
            </div>
          </div>
          <div className="about-card-container">
            <div className="about-img">
              <img src={img7} loading="lazy" width="480vh" />
            </div>
            <div className="about-card">
              <h5>مساعدة الراغبين في التجارة</h5>
              <p>
                يمكننا توفير مختلف العروض للراغبين في الحصول على منتجات جملة في
                عدد من المجالات شرط أن يتم تحديد سقف التاجر قبل ذلك ليتم تزويده
                بعدد من العروض وتقديم له كل ما يفيده في المجال والمشوره مجاناً.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
