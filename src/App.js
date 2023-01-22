import "./App.css";
import { Fragment, useEffect } from "react";
import Feed from "./components/Feed";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// import Widgets from "./components/Widgets";
import { useDispatch, useSelector } from "react-redux";
import Login from "./components/Login";

import { login, logout } from "./store/userSlice";

import { selectUser } from "./store/userSlice";
import { auth } from "./components/firebase-config";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      console.log(userAuth);
      console.log(userAuth.user);
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            displayName: userAuth.displayName,
            uid: userAuth.uid,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Fragment>
      <div className="app">
        <Header />
        {!user ? (
          <Login className="login" />
        ) : (
          <div className="app__body">
            <Sidebar className="sidebar" />
            <Feed className="feed" />
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default App;
