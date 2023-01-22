import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const hashtags = (item) => {
    return (
      <div className="recent__item">
        <span>#</span>
        <p>{item}</p>
      </div>
    );
  };

  return (
    <div className="sidebar__container">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80"
          alt="cover"
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0].toUpperCase()}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h5>{user.email}</h5>
      </div>
      <div className="sidebar__middle">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statnumber">25</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statnumber">39</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <h5>Recent</h5>
        {hashtags("react")}
        {hashtags("frontend")}
        {hashtags("selfLearnt")}
        {hashtags("programming")}
      </div>
    </div>
  );
}

export default Sidebar;
