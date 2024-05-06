import React,{useState} from "react";
import "./Landing.css";
import img6 from "../../assets/img6.avif";
import img7 from "../../assets/img7.avif";
import img2 from "../../assets/photo-1632923565835-6582b54f2105.avif";
import img3 from "../../assets/photo-1599696848652-f0ff23bc911f.avif";
import img4 from "../../assets/photo-1556185781-a47769abb7ee.avif";
import img5 from "../../assets/pexels-maria-orlova-4947220.jpg";
import img8 from "../../assets/img8.avif";
import img9 from "../../assets/img9.avif";
import { NavLink } from 'react-router-dom';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { axiosInstance } from "../../Axios/instance";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/logo.png";
import headimg from "../../assets/sunset-1634374_640.jpg";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Landing() {
  const bStyle = {
    backgroundImage: `url(${headimg})`,
  };

  const stylee = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "1px solid white !important",
    borderRadius: "17px",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const [open3, setOpen3] = React.useState(false);
  const handleOpen3 = () => setOpen3(true);
  const handleClose3 = () => setOpen3(false);

  const [open4, setOpen4] = React.useState(false);
  const handleOpen4 = () => setOpen4(true);
  const handleClose4 = () => setOpen4(false);

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
      
      {/* Nav */}
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

      {/* About */}
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

      {/* Service */}
      <div className="section2">
        <p className="section2-text">الخدمات</p>
        <p className="section2-text2">
          نمتلك خبرة طويلة في مجالنا، ونطمح لتقديم أفضل وأجود منتجات لك.
        </p>
        <div className="section2-container">
          <div className="item">
            <div className="section2-img">
              <img
                src={img2}
                loading="lazy"
                height="300vh"
                width="250vh"
                srcSet=""
              />
            </div>
            <div className="title">
              <h5> الأجهزة الكهربائية والمنزلية</h5>
            </div>
            <div className="show-more-container" onClick={handleOpen}>
              <div className="show-more">
                <p>المزيد</p>
                <ArrowBackIcon />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="section2-img">
              <img
                src={img3}
                loading="lazy"
                height="300vh"
                width="250vh"
                srcSet=""
              />
            </div>
            <div className="title">
              <h5>الأثاث والمفروشات المنزلية</h5>
            </div>
            <div className="show-more-container" onClick={handleOpen2}>
              <div className="show-more">
                <p>المزيد</p>
                <ArrowBackIcon />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="section2-img">
              <img
                src={img4}
                loading="lazy"
                height="300vh"
                width="250vh"
                srcSet=""
              />
            </div>
            <div className="title">
              <h5>معدات المطاعم والمطابخ</h5>
            </div>
            <div className="show-more-container" onClick={handleOpen3}>
              <div className="show-more">
                <p>المزيد</p>
                <ArrowBackIcon />
              </div>
            </div>
          </div>
          <div className="item">
            <div className="section2-img">
              <img
                src={img5}
                loading="lazy"
                height="300vh"
                width="250vh"
                srcSet=""
              />
            </div>
            <div className="title">
              <h5>مكائن ايسكريم</h5>
            </div>
            <div className="show-more-container" onClick={handleOpen4}>
              <div className="show-more">
                <p>المزيد</p>
                <ArrowBackIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Shipping */}
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

      {/* Payment*/}
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

      {/* Contact */}
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
      
    



      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={stylee}>
            <span
              style={{
                color: "black",
                marginBottom: "8px",
                cursor: "pointer",
                fontSize: "26px",
              }}
              aria-label="close"
              onClick={handleClose} // Call handleClose function when clicked
              sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
            >
              <CloseIcon />
            </span>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <p style={{ marginBottom: "6px" }}>
                - نوفر أحدث الأجهزة الكهربائية والمنزلية المستخدمة وكذلك الاستوك
                ( جديدة بدون كراتين ) من افران وغسالات وثلاجات ومكيفات ذات
                ماركات عالمية بحالة ممتازة جداً وخالية من اي عيوب تماماً.
              </p>
              <p style={{ marginBottom: "6px" }}>
                - مكانس كهربائية أجهزة مايكرويف
              </p>
              <p style={{ marginBottom: "6px", lineHeight: "18px" }}>
                - خلاطات وطواحين منزلية
              </p>
              <p style={{ marginBottom: "6px" }}>- شاشات تلفزيونية</p>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open2}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open2}>
          <Box sx={stylee}>
            <span
              style={{
                color: "black",
                marginBottom: "8px",
                cursor: "pointer",
                fontSize: "26px",
              }}
              aria-label="close"
              onClick={handleClose2} // Call handleClose function when clicked
              sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
            >
              <CloseIcon />
            </span>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <p style={{ marginBottom: "6px" }}>- دواليب</p>
              <p style={{ marginBottom: "6px" }}>- غرف نوم</p>
              <p style={{ marginBottom: "6px", lineHeight: "18px" }}>
                - مفروشات مختلفة
              </p>
              <p style={{ marginBottom: "6px" }}>- طاولات الطعام</p>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open3}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open3}>
          <Box sx={stylee}>
            <span
              style={{
                color: "black",
                marginBottom: "8px",
                cursor: "pointer",
                fontSize: "26px",
              }}
              aria-label="close"
              onClick={handleClose3} // Call handleClose function when clicked
              sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
            >
              <CloseIcon />
            </span>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <p style={{ marginBottom: "6px" }}>- مكائن شاورما</p>
              <p style={{ marginBottom: "6px" }}>- مكائن بروست</p>
              <p style={{ marginBottom: "6px", lineHeight: "18px" }}>
                {" "}
                - سخانات و خلاطات و غيرها الكثير
              </p>
              <p style={{ marginBottom: "6px" }}></p>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open4}
        // onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open4}>
          <Box sx={stylee}>
            <span
              style={{
                color: "black",
                marginBottom: "8px",
                cursor: "pointer",
                fontSize: "26px",
              }}
              aria-label="close"
              onClick={handleClose4} // Call handleClose function when clicked
              sx={{ position: "absolute", top: 0, right: 0, m: 1 }}
            >
              <CloseIcon />
            </span>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <p style={{ marginBottom: "6px" }}></p>
              <p style={{ marginBottom: "6px" }}></p>
              <p style={{ marginBottom: "30px", lineHeight: "22px" }}>
                - مكائن ايسكريم مختلفة المقاسات والأحجام
              </p>
              <p style={{ marginBottom: "6px" }}>
                كذلك توفير صفقات الملابس وغيرها للتجار والافراد بكميات مختلفة
              </p>
            </Typography>
            <Typography
              id="transition-modal-description"
              sx={{ mt: 2 }}
            ></Typography>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default Landing;
