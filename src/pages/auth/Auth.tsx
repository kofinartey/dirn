import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/redux";
//my imports
// import { login } from "../../redux/auth/authActions";
import SignUp from "../../components/sign_up/SignUp";
import Login from "../../components/login/Login";
import logo from "../../assets/icons/logologo.png";
import AuthStyles from "./AuthStyles";
import { Divider } from "@mui/material";

function Auth() {
  const classes = AuthStyles();
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const user = useAppSelector((state) => state.user);
  const [isSignUp, setIsSignUp] = useState(false);

  const changeForm = () => {
    setIsSignUp(!isSignUp);
  };

  const trialLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // dispatch(
    // //   login(
    // //     {
    // //       email: process.env.REACT_APP_GUEST_EMAIL,
    // //       password: process.env.REACT_APP_GUEST_PASS,
    // //     },
    // //     // history
    // //   )
    // );
  };

  const authError = (
    <p className={classes.authError}>{user.error.toUpperCase()}</p>
  );

  return (
    <div className={classes.Auth}>
      <div className={classes.logo} style={{ color: darkTheme ? "white" : "" }}>
        <img src={logo} alt="logo icon" />
        <p>dirn</p>
      </div>
      <div className={classes.wrapper}>
        {user.error && authError}

        {isSignUp ? (
          <SignUp changeForm={changeForm} />
        ) : (
          <Login changeForm={changeForm} />
        )}
        <Divider />
        <div className={classes.trial}>
          <p>Don't want to be bothered?</p>
          <button className={`${classes.button} `} onClick={trialLogin}>
            Use trial account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
