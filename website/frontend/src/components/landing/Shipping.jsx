import React from 'react'
import img8 from "../../assets/img8.avif";
import img9 from "../../assets/img9.avif";
import { NavLink } from 'react-router-dom';
import img1 from "../../assets/logo.png";
import headimg from "../../assets/sunset-1634374_640.jpg";
function Shipping() {
  const bStyle = {
    backgroundImage: `url(${headimg})`,
  };
  return (
    <>
    <nav className='new-nav' style={bStyle}>
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
            <h1>الشحن و التوصيل</h1>
          </div>
        </div>
      </nav>
      <div className="shipping-section">
        <p className="section-text">الشحن و التوصيل</p>

        <div className="shipping-container">
          <div className="paragraph-part">
            <p>
              تتميز خدماتنا بخدمة سريعة في الشحن لجميع مناطق ومحافظات اليمن وذلك
              بالتعاون مع أكثر من شركة نقليات مميزة تمتاز بالسرعة والمهنية
              والأمانة في خدمات الشحن والتوصيل
            </p>
            <p>
              كما أننا نهتم بتغليف الطرود والاغراض المرسله تغليفا محكماً يضمن
              المحافظة عليها ووصولها اليكم بنفس حالتها المرسله
            </p>
            <p>كل ذلك وأكثر معنا ..</p>
            <p> للمزيد من المعلومات 

              <NavLink to="/contact">
                <span className='contact-btn'> تواصل معنا </span>
              </NavLink>
              
              
            </p>
          </div>
          <div className="img-part">
            <img className="img8" src={img8} />
            <img className="img9" src={img9} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Shipping
