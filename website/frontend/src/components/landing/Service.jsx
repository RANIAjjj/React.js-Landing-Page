import React from 'react'
import img2 from "../../assets/photo-1632923565835-6582b54f2105.avif";
import img3 from "../../assets/photo-1599696848652-f0ff23bc911f.avif";
import img4 from "../../assets/photo-1556185781-a47769abb7ee.avif";
import img5 from "../../assets/pexels-maria-orlova-4947220.jpg";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import img1 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import headimg from "../../assets/sunset-1634374_640.jpg";
function Service() {
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
            <h1>خدماتنا</h1>
          </div>
        </div>
      </nav>
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
  )
}

export default Service
