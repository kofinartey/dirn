import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "../../utils/redux";

import leftArrow from "../../assets/icons/icon-arrow-left.svg";

function GoBack() {
  const classes = makeStyles({
    goBack: {
      display: "flex",
      alignItems: "center",
      marginBottom: "2rem",
      cursor: "pointer",
      "& img": {
        marginRight: "1rem",
      },
      " & h4": {
        fontSize: "0.75rem",
      },
    },
  })();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const navigate = useNavigate();

  return (
    <div
      className={classes.goBack}
      onClick={() => {
        navigate(-1);
      }}
    >
      <img src={leftArrow} alt="" />
      <h4 style={{ color: darkTheme ? "white" : "" }}>Go Back</h4>
    </div>
  );
}

export default GoBack;
