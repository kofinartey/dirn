import * as yup from "yup";

export const infoSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
});

export const passwordSchema = yup.object().shape({
  currentPassword: yup.string().min(8).max(255).required("can't be empty"),
  newPassword: yup.string().min(8).max(255).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "passwords do not match"),
});
