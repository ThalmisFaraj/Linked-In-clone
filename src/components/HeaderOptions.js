import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/icons-material/AccountCircle";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";

function HeaderOptions({ avatar, title, Icon, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        <Avatar src={user?.photoUrl} className="headerOption__icon">
          {user?.email[0]}
        </Avatar>
      )}

      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOptions;
