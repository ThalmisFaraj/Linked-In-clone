import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase-config";
import "./Login.css";
import { login } from "../store/userSlice";

function Login() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  // const [needToRegister, setNeedToRegister] = useState(true);

  const dispatch = useDispatch();

  const registerNow = () => {
    // setNeedToRegister(false);

    if (!fullName || !email) {
      alert("Please enter valid email and password");
      return;
    } else {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
          // console.log(userAuth.user);
          userAuth.user
            .updateProfile({
              displayName: fullName,
              photoURL: photoUrl,
            })
            .then(() => {
              dispatch(
                login({
                  email: userAuth.user.email,
                  uid: userAuth.user.uid,
                  displayName: fullName,
                  photoUrl: photoUrl,
                })
              );
            })
            .catch((error) => alert(error));
        })
        .catch((error) => {
          alert(error.message);
          // ..
        });
    }
  };

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
      dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoUrl: userAuth.user.photoURL,
        })
      );
    });
  };
  return (
    <div className="login__page">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png"
        alt="linkin logo"
      ></img>
      <form>
        <input
          type="text"
          placeholder="Fullname (If not registered)"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        ></input>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        ></input>
        <input
          type="text"
          placeholder="Photo URL (Optional)"
          onChange={(e) => setPhotoUrl(e.target.value)}
          value={photoUrl}
        ></input>
        <button type="submit" onClick={loginToApp}>
          {/* {needToRegister ? <p>Sign In</p> : <p>Register</p>} */}
          Sign In
        </button>
      </form>
      <p>
        Not registered yet?
        <span onClick={registerNow}> Register Now</span>
      </p>
    </div>
  );
}

export default Login;
