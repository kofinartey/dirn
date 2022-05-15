import React from "react";
import { useAppSelector, useAppDispatch } from "../../utils/redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

//my imports
import Input from "../form_elements/Input";
import Label from "../form_elements/Label";
import FormControl from "../form_elements/FormControl";
import { CircularProgress } from "@mui/material";
import { login } from "../../state/user/userSlice";
import AuthStyles from "../../pages/auth/AuthStyles";

const loginSchema = yup.object().shape({
  email: yup.string().email("invalid email").required("can't be empty"),
  password: yup.string().min(8).max(255).required("can't be empty"),
});

type LoginProps = {
  changeForm: any; //todo
};

type LoginInputs = {
  email: string;
  password: string;
};

function Login({ changeForm }: LoginProps) {
  const classes = AuthStyles();
  const dispatch = useAppDispatch();
  //   const fetchError = useAppSelector((state) => state.user.error);
  const user = useAppSelector((state) => state.user);
  //   const history = useHistory();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginInputs>({
    resolver: yupResolver(loginSchema),
  });

  const switchForm = () => {
    changeForm();
    reset();
  };
  const submit: SubmitHandler<LoginInputs> = (data) => {
    let toPass = {
      formData: data,
      navigate,
    };
    dispatch(login(toPass));
    // dispatch(login(data, history));
  };

  return (
    <form onSubmit={handleSubmit(submit)} className={classes.form}>
      {/* {fetchError && <p style={{ color: "#EC5757" }}>{fetchError}</p>} */}
      <>
        <FormControl>
          <Input placeholder="email" {...register("email")} />
          {errors.email && (
            <p className={classes.error}>{errors.email.message}</p>
          )}
        </FormControl>
        <FormControl>
          <Input
            type="password"
            placeholder="password"
            {...register("password")}
          />
          {errors.email && (
            <p className={classes.error}>{errors.password?.message}</p>
          )}
        </FormControl>
      </>
      <button type="submit" className={classes.button}>
        LOGIN
      </button>
      <div className={classes.switch}>
        <p>
          Don't have an account? <span onClick={switchForm}> SignUp</span>
        </p>
      </div>

      {user.loading && (
        <div className={classes.spinner}>
          <CircularProgress
          // size="30" color="inherit"
          />
        </div>
      )}
    </form>
  );
}

export default Login;
