import { makeStyles } from "@mui/styles";
import colors from "../../utils/colors";

type ButtonProps = {
  children: React.ReactNode;
  color?: string;
  backgroundColor?: string;
  leftIcon?: string;
  rightIcon?: string;
} & React.ComponentProps<"button">;

function Button({
  children,
  color,
  backgroundColor,
  leftIcon,
  rightIcon,
}: ButtonProps) {
  const classes = makeStyles({
    Button: {
      color: color ? color : "white",
      backgroundColor: backgroundColor
        ? backgroundColor
        : colors.purple.primary,
      fontSize: "0.75rem",
      fontWeight: "bold",
      padding: "1rem",
      borderRadius: "2rem",
      border: "none",
      cursor: "pointer",
    },
  })();

  return (
    <button className={classes.Button}>
      {leftIcon && <img src={leftIcon} alt="leftIcon" />}
      {children}
      {rightIcon && <img src={rightIcon} alt="leftIcon" />}
    </button>
  );
}

export default Button;
