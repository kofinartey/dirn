import React from "react";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "../../utils/redux";

type LabelProps = {
  children: React.ReactNode;
} & React.ComponentProps<"label">;

function Label({ children, ...rest }: LabelProps) {
  const darkTheme = useAppSelector((state) => state.darkTheme);

  const classes = makeStyles({
    label: {
      fontSize: "0.75rem",
      color: darkTheme ? "white" : "#7E88C3",
      fontWeight: "500",
    },
  })();
  return (
    <label className={classes.label} {...rest}>
      {children}
    </label>
  );
}

export default Label;
