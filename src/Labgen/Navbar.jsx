import React from "react";
import style from "./styles.module.css";
import PersonIcon from "@mui/icons-material/Person";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
function Navbar() {
  return (
    <div className={style.nav}>
      <img className={style.img1} src="./labgen-trans.png" alt="labgen" />
      <PersonIcon className={style.img2} />
      <samp className={style.Dlalehzar}>Dlalehzar</samp>
      <LocationOnIcon className={style.img3} />
      <samp className={style.Dlalehzar}>Labusa</samp>
      <NotificationsNoneIcon className={style.img3} />
    </div>
  );
}

export default Navbar;
