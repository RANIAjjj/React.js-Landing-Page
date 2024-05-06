import React from "react";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import logo from "../../assets/logo.png"
function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="foot">
            <div className="foot-links">

              <div className="logo-container">
                <div className="logo">
                  <img
                    src={logo}
                    alt="logo"
                    width={150}
                  />
                </div>
              </div>

              <div className="subfoot-parts">
                <p style={{ color: "#F9F9F9" }}>من نحن</p>
                <div className="lines">
                  <p>نبذة عنا</p>
                  <p>الخدمات</p>
                  <p>طرق الدفع</p>
                  <p>الشحن و التوصيل</p>
                  <p>تواصل معنا</p>
                </div>
              </div>
              <div className="subfoot-parts">
                <p style={{ color: "#F9F9F9" }}>السياسات</p>
                <div className="lines">
                  <p>الشروط و البنود</p>
                  <p>سياسة الخصوصية</p>
                  <p>الخدمات التجارية</p>
                  <p>البضائع و المنتجات</p>
                </div>
              </div>
              <div className="subfoot-parts">
                <p style={{ color: "#F9F9F9" }}>تواصل</p>
                <div className="lines">
                  <p>يرجي الاتصال بنا</p>
                  <p>
                    00971544505691 <PhoneInTalkIcon />
                  </p>
                  <p>
                    00971586339515 <PhoneInTalkIcon />
                  </p>
                  <p>او مراسلتنا علي البريد</p>
                  <p>
                  itemstoye@gmail.com <AttachEmailIcon />
                  </p>
                </div>
              </div>
              {/* </div> */}
            </div>
            <div className="copyRight">
              <p>© 2024 Items to ye. جميع الحقوق محفوظة.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
