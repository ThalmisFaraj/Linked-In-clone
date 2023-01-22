import React, { useEffect, useState } from "react";
import "./Feed.css";
// import proPic from "../assets/prof pic.jpg";
import Post from "./sub-components/Post";
import { db } from "./firebase-config.js";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import { collection, addDoc } from "firebahttps://cdn-icons-png.flaticon.com/512/149/149071.pngse/firestore";

import RateReviewIcon from "@mui/icons-material/RateReview";

import PhotoSizeSelectActualIcon from "@mui/icons-material/PhotoSizeSelectActual";
import IconButtons from "./sub-components/IconButtons";
import VideocamIcon from "@mui/icons-material/Videocam";
import ArticleIcon from "@mui/icons-material/Article";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { useSelector } from "react-redux";
import { selectUser } from "../store/userSlice";
import Flipmove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [postInput, setPostInput] = useState("");

  const user = useSelector(selectUser);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
        // console.log(posts);
      });
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    console.log("new post");
    db.collection("posts")
      .add({
        name: user.displayName,
        description: "REACT Developer",
        message: postInput,
        photoUrl: user.photoUrl,
        timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    console.log("data added");
    setPostInput("");
  };

  return (
    <div className="feed__container">
      <div className="feed__postbox">
        <div className="postbox__input">
          <RateReviewIcon className="post__icon" />
          <form onSubmit={sendPost}>
            <input
              type="text"
              placeholder="Start a post"
              value={postInput}
              onChange={(e) => setPostInput(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="postbox__upload__icons">
          {
            <IconButtons
              title={"Photo"}
              Icon={<PhotoSizeSelectActualIcon />}
              color="#70b5f9"
            />
          }
          {
            <IconButtons
              title={"Video"}
              Icon={<VideocamIcon />}
              color="#ffda75"
            />
          }
          {
            <IconButtons
              title={"Document"}
              Icon={<EventNoteIcon />}
              color="#ff8375"
            />
          }
          {
            <IconButtons
              title={"Write article"}
              Icon={<ArticleIcon />}
              color="#7fdb7f"
            />
          }
        </div>
      </div>
      <Flipmove>
        {posts.map(({ id, data: { name, description, photoUrl, message } }) => {
          return (
            <Post
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
          );
        })}
      </Flipmove>
      {/* {
        <Post
          name="Elon Musk"
          description="CEO, Tesla Motors"
          message="Hi guys"
          photoUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg/1200px-Elon_Musk_Royal_Society_%28crop2%29.jpg"
        />
      } */}
    </div>
  );
}

export default Feed;
