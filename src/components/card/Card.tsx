import React from "react";
import { useAppSelector } from "../../utils/redux";
import { makeStyles } from "@mui/styles";

type CardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
} & React.ComponentProps<"div">;

function Card({ children, style }: CardProps) {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const styles = makeStyles({
    Card: {
      backgroundColor: darkTheme ? "#1E2139" : "white",
      color: darkTheme ? "white" : "",
      margin: "1rem 0",
      padding: "1.5rem",
      borderRadius: ".5rem",
      border: "2px solid rgba(0,0,0,0)",
      boxShadow: "-3px 21px 27px -10px rgba(136,142,176,0.05)",
      ...style,
    },
  });
  const classes = styles();
  return <div className={classes.Card}>{children}</div>;
}

export default Card;
