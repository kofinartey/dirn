import { makeStyles } from "@mui/styles";

type FormControlProps = {
  children: React.ReactNode;
};

function FormControl({ children }: FormControlProps) {
  const classes = makeStyles({
    formControl: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "1.75rem",
      position: "relative",
    },
  })();
  return <div className={classes.formControl}>{children}</div>;
}

export default FormControl;
