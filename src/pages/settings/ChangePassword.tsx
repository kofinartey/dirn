import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//my imports
// import { changePassword } from "../../redux/auth/authActions";
import Label from "../../components/form_elements/Label";
import Input from "../../components/form_elements/Input";
import Button from "../../components/button/Button";
import FormControl from "../../components/form_elements/FormControl";
import { passwordSchema } from "./settingsSchema";
import ChangePasswordStyles from "./ChangePasswordStyles";
import Text from "../../components/text/Text";

interface ChangePasswordInterface {
  // currentPassword: string;
  // newPassword: string;
  // confirmPassword: string
}

const ChangePasswordForm = () => {
  const classes = ChangePasswordStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });
  const [changingStatus, setChangingStatus] = useState({
    loading: false,
    message: "",
    visible: false,
  });

  const submitPassword: SubmitHandler<ChangePasswordInterface> = (data) => {
    console.log(data);
    // dispatch(changePassword(data, setChangingStatus, reset));
  };

  const inputStyle = {
    color: darkTheme && "white",
    background: darkTheme && "#252945",
    borderColor: darkTheme && "#252945",
  };

  return (
    <div className={classes.password}>
      <p>Change Password</p>
      <form onSubmit={handleSubmit(submitPassword)}>
        <FormControl>
          <Text as="p">{errors.currentPassword?.message}</Text>
          <Label htmlFor="currentPassword">Current Passwork</Label>
          <Input
            type="password"
            id="currentPassword"
            {...register("currentPassword")}
          />
        </FormControl>
        <FormControl>
          <Text as="p">{errors.newPassword?.message}</Text>
          <Label htmlFor="newPassword">Current Passwork</Label>
          <Input
            type="password"
            id="newPassword"
            {...register("newPassword")}
          />
        </FormControl>
        <FormControl>
          <Text as="p">{errors.confirmPassword?.message}</Text>
          <Label htmlFor="confirmPassword">Current Passwork</Label>
          <Input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
          />
          {/* errors={errors.confirmPassword && "Passwords don't match"} */}
        </FormControl>

        <p style={{ fontSize: "0.8rem", color: "#ec5757" }}>
          {changingStatus.visible && `*** ${changingStatus.message}`}
        </p>
        <Button
          className={classes.button}
          style={{ backgroundColor: darkTheme ? "#252945" : "" }}
        >
          CHANGE PASSWORD
        </Button>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
