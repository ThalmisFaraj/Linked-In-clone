import React, { forwardRef } from "react";
import IconButtons from "./IconButtons";
import "./Post.css";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { Avatar } from "@mui/material";

const Post = forwardRef(({ name, description, photoUrl, message }, ref) => {
  const removePost = () => {};
  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <div>
          <Avatar src={photoUrl} className="avatar">
            {name[0]}
          </Avatar>
          {/* <img src={photoUrl} alt="" /> */}
        </div>
        <div className="post__header__title">
          <h4>{name}</h4>
          <p>{description}</p>
        </div>

        <div className="delete__icon">
          <DeleteForeverOutlinedIcon
            style={{ color: "gray" }}
            onClick={removePost}
          />
        </div>
      </div>
      <div className="post__message">
        <p>{message}</p>

        <div className="post__actions">
          {
            <IconButtons
              Icon={<ThumbUpOutlinedIcon />}
              title="Like"
              color="gray"
            />
          }
          {
            <IconButtons
              Icon={<MessageOutlinedIcon />}
              title="Comment"
              color="gray"
            />
          }
          {<IconButtons Icon={<ReplyIcon />} title="Share" color="gray" />}
        </div>
      </div>
    </div>
  );
});

export default Post;
