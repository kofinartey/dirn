import React, { memo } from "react";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "../../utils/redux";

type StatusCardProps = {
  children: React.ReactNode;
  status: "paid" | "pending" | "draft" | string;
};

function StatusCard({ children, status }: StatusCardProps) {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const styles = makeStyles({
    status: {
      color:
        status === "paid"
          ? "rgba(57,214,159, 1)"
          : status === "pending"
          ? "rgba(255,143,0,1)"
          : darkTheme
          ? "rgb(237, 227, 250)"
          : status === "draft"
          ? "hsl(231, 20%,27%)"
          : "#FF8F00",

      backgroundColor:
        status === "paid"
          ? "rgba(57,214,159, 0.1)"
          : status === "draft"
          ? "rgba(100,100,150,0.1)"
          : "rgba(225,143,0,0.07)",
      width: "6.5rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: ".7rem 0",
      borderRadius: ".3rem",
      gridColumn: "2/3",
      gridRow: "2/3",
      justifySelf: "end",
    },
    status__dot: {
      width: ".5rem",
      height: ".5rem",
      borderRadius: "50%",
      marginRight: ".5rem",
      backgroundColor:
        status === "paid"
          ? "hsl(160,67%,52%)"
          : status === "pending"
          ? "rgba(255,143,0,1)"
          : darkTheme
          ? "rgb(237, 227, 250)"
          : status === "draft"
          ? "hsl(231, 20%,27%)"
          : "#FF8F00",
    },
  });

  const classes = styles();

  const capitalize = (word: string) => {
    return word && word[0].toUpperCase() + word.slice(1);
  };

  return (
    <div className={classes.status}>
      <div className={classes.status__dot}></div>
      <h5>{capitalize(`${children}`)}</h5>
    </div>
  );
}

export default memo(StatusCard);
