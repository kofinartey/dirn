import React from "react";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "../../utils/redux";

type TextOwnProps<E extends React.ElementType> = {
  children: React.ReactNode;
  // as ?: "p"| "h1"| "h2"| "h3"| "h4"| "h6"| "h6";
  as: E;
};
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  React.ComponentProps<E>;

const Text = <E extends React.ElementType>({ children, as }: TextProps<E>) => {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const classes = makeStyles({
    Text: {
      color: darkTheme ? "white" : "",
    },
  })();

  const Component = as || "div";
  return <Component className={classes.Text}>{children}</Component>;
};

export default Text;
