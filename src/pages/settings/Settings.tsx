//package imports
import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/redux";
// import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { config } from "dotenv";
//my imports
import ChangePasswordForm from "./ChangePassword";
import SelectImage from "./SelectImage";
// import {
//   editUserInfo,
//   changeCurrency,
//   removeAvatar,
// } from "../../redux/auth/authActions";
import DeleteConfirmation from "../../components/delete_confirmation/DeleteConfirmation";
import { toggleDeleteConfirmation } from "../../state/delete_confirmation/deleteConfirmation";
import { switchTheme } from "../../state/theme/theme";
import { infoSchema } from "./settingsSchema";
import Text from "../../components/text/Text";
import Button from "../../components/button/Button";
import Card from "../../components/card/Card";
import Label from "../../components/form_elements/Label";
import Input from "../../components/form_elements/Input";
import Select from "../../components/form_elements/Select";
import FormControl from "../../components/form_elements/FormControl";
import { Divider, Switch } from "@mui/material";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import leftArrow from "../../assets/icon-arrow-left.svg";
import SettingsStyles from "./SettingsStyles";
import { CurrencyInterface } from "../../types";

function Settings() {
  config();
  const classes = SettingsStyles();
  const history = useHistory();
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const deleteConfirmation = useAppSelector(
    (state) => state.deleteConfirmation
  );
  const user = useAppSelector((state) => state.user.userInfo);
  const userName = `${user.firstName} ${user.lastName}`;

  const [checked, setChecked] = useState(false);
  const [showImageSelector, setShowImageSelector] = useState(false);

  const currencies: CurrencyInterface[] = [
    { id: 1, value: "$", name: "Dollar" },
    { id: 2, value: "€", name: "Euro" },
    { id: 3, value: "£", name: "Pound" },
    { id: 4, value: "¢", name: "Cedi" },
  ];

  const [currency, setCurrency] = useState(() => {
    return currencies.find(
      (currency) => currency.value === user.settings.currency
    );
  });

  // effect currency changes
  useEffect(() => {}, [currency]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(infoSchema),
  });

  //change theme checker based on current theme
  useEffect(() => {
    if (darkTheme) setChecked(true);
    else setChecked(false);
  }, [darkTheme]);

  const sumbitBasicInfo = (data) => {
    // dispatch(editUserInfo(data));
  };

  const handleCurrency = (e) => {
    // dispatch(changeCurrency(e.target.value));
  };

  const deleteAvatar = () => {
    // dispatch(removeAvatar());
  };

  return (
    <div className={classes.Settings}>
      {/* conditionally render modal for delete actions */}
      {deleteConfirmation && <DeleteConfirmation id={user._id} />}
      {/* conditionally render image selection modals */}
      {showImageSelector && <SelectImage toggle={setShowImageSelector} />}

      <div className={classes.goBack} onClick={() => history.push("/main")}>
        <img src={leftArrow} alt="" />
        <p>Go back</p>
      </div>

      <div className={classes.wrapper}>
        {/* profile section */}
        <section className={classes.profile}>
          <Text as="p" className={classes.group__heading}>
            Profile
          </Text>

          <Card
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              className={classes.profile_pic}
              style={{ borderColor: darkTheme ? "#7C5DFA" : "" }}
            >
              {user.avatar ? (
                <img
                  src={`${process.env.REACT_APP_BASE_URL}/users${user.avatar}`}
                  alt=""
                />
              ) : (
                <p>{userName[0].toUpperCase()}</p>
              )}
            </div>
            <p className={classes.userName}>{userName}</p>

            <Button
              className={classes.profile__btn}
              onClick={() => {
                setShowImageSelector(true);
              }}
            >
              {" "}
              UPLOAD NEW AVATAR
            </Button>
            <Button
              className={classes.profile__btn}
              style={{ backgroundColor: darkTheme ? "#252945" : "" }}
              onClick={deleteAvatar}
            >
              DELETE
            </Button>
          </Card>
        </section>

        {/* divides profile and settings at 1080px and above */}
        <div className={classes.vertical__divider}></div>

        <section className={classes.settings__main}>
          <Text as="p" className={classes.group__heading}>
            Basic Info
          </Text>
          <Card>
            <form
              className={classes.basic__info}
              onSubmit={handleSubmit(sumbitBasicInfo)}
            >
              <FormControl>
                <Label htmlFor="firstName">FirstName</Label>
                <Input
                  id="firstName"
                  value={user.firstName}
                  {...register("firstName")}
                />
                <small>{errors.firstName?.message}</small>
              </FormControl>
              <FormControl>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={user.lastName}
                  {...register("lastName")}
                />
                <small>{errors.lastName?.message}</small>
              </FormControl>
              <FormControl>
                <Label htmlFor="email">Email</Label>

                <Input id="email" value={user.email} {...register("email")} />
                <small>{errors.lastemail?.message}</small>
              </FormControl>
              <button
                className={classes.profile__btn}
                style={{ backgroundColor: darkTheme ? "#252945" : "" }}
              >
                Save changes
              </button>
            </form>
          </Card>

          <Text as="p" className={classes.group__heading}>
            Preferences
          </Text>

          <Card>
            <div className={classes.preferences__unit}>
              <p>Theme</p>
              <div className={classes.themeSwitch}>
                <p>Light</p>
                <Switch
                  checked={checked}
                  onChange={() => {
                    dispatch(switchTheme());
                  }}
                />
                <p>Dark</p>
              </div>
            </div>
            <Divider />
            <div className={classes.preferences__unit}>
              <p>Currency</p>
              <p>{currency?.value}</p>
              <Select
                options={currencies}
                selectedOption={currency!}
                setSelectedOption={setCurrency}
              />
            </div>
          </Card>

          <Text as="p" className={classes.group__heading}>
            Account Actions
          </Text>

          <Card style={{ marginBottom: "10rem" }}>
            <ChangePasswordForm />
            <Divider style={{ margin: "5rem 0  5rem 0" }} />

            <div className={classes.delete__account}>
              <p style={{ color: darkTheme ? "white" : "black" }}>
                Delete All Invoices
              </p>
              <button
                className={`${classes.profile__btn} ${classes.delete__btn}`}
                onClick={() => {
                  dispatch(toggleDeleteConfirmation());
                }}
              >
                <WarningRoundedIcon />
                <p>DELETE</p>
              </button>
            </div>

            <div className={classes.delete__account}>
              <p>Delete Account</p>
              <button
                onClick={() => dispatch(toggleDeleteConfirmation)}
                className={`${classes.profile__btn} ${classes.delete__btn}`}
                style={{ backgroundColor: "#EC5757" }}
              >
                <WarningRoundedIcon />
                <p>DELETE</p>
              </button>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

export default Settings;
