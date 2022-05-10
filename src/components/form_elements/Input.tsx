import { forwardRef } from "react";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "../../utils/redux";

type InputProps = {
  error?: boolean;
} & React.ComponentProps<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref) => {
    const darkTheme = useAppSelector((state) => state.darkTheme);
    const { error, ...rest } = props;
    const classes = makeStyles({
      input: {
        outline: "none",
        width: "100%",
        minWidth: "1rem",
        flexGrow: "1",
        border: "2px solid #DFE3FA",
        borderRadius: "0.3rem",
        padding: "0.9rem",
        color: darkTheme ? "white" : "",
        fontSize: "0.9rem",
        fontWeight: "bold",
        // backgroundColor: darkTheme && "#1E2139",
        backgroundColor: darkTheme ? "#252945" : "",
        borderColor: props.error
          ? "#EC5757"
          : darkTheme
          ? "#252945"
          : "#DFE3FA",
        marginTop: "0.75rem",

        "&:focus": {
          border: "2px solid #7C5DFA",
        },
        "&::placeholder": {
          color: "rgba(0,0,0,0.2)",
        },
      },
    })();
    return <input className={classes.input} ref={ref} {...props} {...rest} />;
  }
);

export default Input;
