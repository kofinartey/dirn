import React from "react";
import { useAppDispatch } from "../../utils/redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
//my imports
import AuthStyles from "../../pages/auth/AuthStyles";
import { signup } from "../../state/user/userSlice";
import FormControl from "../form_elements/FormControl";
import Input from "../form_elements/Input";

const signupSchema = yup.object().shape({
  firstName: yup.string().required("can't be empty"),
  lastName: yup.string().required("can't be empty"),
  email: yup.string().email("invalid email").required("can't be empty"),
  password: yup.string().min(8).max(255).required("can't be empty"),
});

type SignUpProps = {
  changeForm: any;
};
type SignUpInputs = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

//MAIN COMPONENT FUNCTION
//MAIN COMPONENT FUNCTION
function SignUp({ changeForm }: SignUpProps) {
  const classes = AuthStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpInputs>({
    resolver: yupResolver(signupSchema),
  });

  const switchForm = () => {
    changeForm();
    reset();
  };
  const submit: SubmitHandler<SignUpInputs> = (data) => {
    const toPass = {
      formData: data,
      navigate,
    };
    dispatch(signup(toPass));
    reset();
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit(submit)}>
      <>
        <div className={classes.names}>
          <FormControl>
            <p className={classes.error}>{errors.firstName?.message}</p>
            <Input placeholder="First Name" {...register("firstName")} />
          </FormControl>

          <FormControl>
            <p className={classes.error}>{errors.lastName?.message}</p>
            <Input placeholder="Last Name" {...register("lastName")} />
          </FormControl>
        </div>

        <FormControl>
          <p className={classes.error}>{errors.email?.message}</p>
          <Input type="email" placeholder="Email" {...register("email")} />
        </FormControl>

        <FormControl>
          <p className={classes.error}>{errors.password?.message}</p>
          <Input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
        </FormControl>
      </>
      <button className={classes.button}>SIGN UP</button>
      <div className={classes.switch}>
        <p>
          Already have an account? <span onClick={switchForm}>Login</span>
        </p>
      </div>
    </form>
  );
}

export default SignUp;
