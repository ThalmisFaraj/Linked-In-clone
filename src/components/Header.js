import React from "react";

// css file imports
import "./Header.css";

// component imports
import HeaderOptions from "./HeaderOptions";

// image imports
import linkedInIcon from "../assets/linkedin_dp.png";
// import avatar from "../assets/thalmis_dp_2.jpg";

// material-ui icons

import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useDispatch } from "react-redux";
import { logout } from "../store/userSlice";
import { auth } from "./firebase-config";

function Header() {
  const dispatch = useDispatch();

  const logoutApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedInIcon} alt="" />
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <div className="header__right__icons">
          <HeaderOptions Icon={HomeIcon} title="Home" />
          <HeaderOptions Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOptions Icon={MessageIcon} title="Messages" />
          <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        </div>
        <div className="header__right__avatar">
          <HeaderOptions avatar={true} title="Me" onClick={logoutApp} />
        </div>
      </div>
    </div>
  );
}

export default Header;
