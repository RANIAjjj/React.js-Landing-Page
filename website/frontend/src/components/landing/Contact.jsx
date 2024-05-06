import React , { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { axiosInstance } from "../../Axios/instance";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import img1 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import headimg from "../../assets/sunset-1634374_640.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const bStyle = {
    backgroundImage: `url(${headimg})`,
  };

  const openwhatsapp = () => {
    window.open("https://wa.me/971586339515", '_blank');
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post(
        `http://localhost:8080/contact`,
        {
          name,
          email,
          message,
        }
      );
      console.log(response.data);
      toast.success('تم ارسال الرسالة بنجاح !');
      setName("")
      setEmail("")
      setMessage("")
    } catch (error) {
      console.error("Error sending message:", error);
    }
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
            <h1>الاتصال بنا</h1>
          </div>
        </div>
      </nav>
      <div className="contactus">
        <div className="contact_us_6">
          <p className="section-text">تواصل معنا</p>
          <div className="form-container container">
            <form className="form-box" onSubmit={handleSubmit}>
              <div className="container-block form-wrapper">
                <div className="mob-text">
                  <p className="text-blk contactus-head"></p>
                  <p className="text-blk contactus-subhead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Felis diam lectus sapien.
                  </p>
                </div>
                <div className="responsive-container-block" id="i2cbk">
                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i10mt-3"
                  >
                    <p className="text-blk input-title"><label htmlFor="name">الاسم</label></p>
                    <input className="input" id="ijowk-3" required name="name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="ip1yp"
                  >
                    <p className="text-blk input-title"><label htmlFor="email">الايميل</label></p>
                    <input className="input" id="ipmgh-3" required name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div
                    className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                    id="i634i-3"
                  >
                    <p className="text-blk input-title"><label htmlFor="message">شاركنا أفكارك</label></p>
                    <textarea
                      className="textinput"
                      id="i5vyy-3"
                      required
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    />
                  </div>
                </div>
                <button type="submit" className="submit-btn" id="w-c-s-bgc_p-1-dm-id-2">
                  ارسال
                </button>
              </div>
            </form>
            <div className="map-part">
              <p
                className="text-blk map-contactus-head"
                id="w-c-s-fc_p-1-dm-id"
              ></p>
              <p className="text-blk map-contactus-subhead">
                تواصل معنا للأسئلة أو المساعدة. نحن هنا لمساعدتك. املأ النموذج
                وسنعود إليك في أقرب وقت ممكن
              </p>
              <div className="social-media-links mob">
                <div className="contact-icon">
                  <a className="social-icon-link" id="ix94i-2-2">
                    <PhoneEnabledIcon />
                  </a>
                  <p>00971544505691</p>
                </div>
                <div className="contact-icon">
                  <a className="social-icon-link" id="itixd">
                    <PhoneEnabledIcon />
                  </a>
                  <p>00971586339515</p>
                </div>
                <div className="contact-icon whatsapp" onClick={openwhatsapp}>
                  <a
                    className="social-icon-link"
                    id="izxvt"
                  >
                    <WhatsAppIcon />
                  </a>
                  <p>00971586339515</p>
                </div>
                <div className="contact-icon">
                  <a className="social-icon-link" id="izldf-2-2"></a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
