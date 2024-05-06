import React from 'react'
import img1 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import headimg from "../../assets/sunset-1634374_640.jpg";
function Payment() {
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
            <h1>طرق الدفع</h1>
          </div>
        </div>
      </nav>
      <div className="payment-container">
        <p className="section2-text">طرق الدفع</p>
        <div className="payment">
          <div className="methods">
            <div className="methods-item">
              <div className="method-title">
                <div className="number">1</div>
                <div className="method-num-text">
                  حوالات داخلية وإيداع مباشر لحسابنا في :-
                </div>
              </div>
              <div className="method-sub-titles">
                <p>شركة العمقي للصرافة</p>
                <p>شركة البسيري للصرافة</p>
                <p>بنك الكريمي للصرافة</p>
              </div>
            </div>

            <div className="methods-item">
              <div className="method-title">
                <div className="number">2</div>
                <div className="method-num-text">
                  كذلك نقبل الدفع عبر الطرق التالية :-
                </div>
              </div>
              <div className="method-sub-titles">
                <p>حوالات ويسترن يونيون</p>
                <p>حوالات موني جرام</p>
                <p>حوالات اكسبريس</p>
              </div>
            </div>
          </div>
          <div className="notes">
            <p>لتسهيل عمليات الدفع لعملاءنا من اليمن تم اعتماد طرق الدفع هذه</p>
            <p>
              كما أنه بالإمكان التنسيق مع العميل ليقوم بالدفع المباشر مع أحد
              المندوبين لنا
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Payment
