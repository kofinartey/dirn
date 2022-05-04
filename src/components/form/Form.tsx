import { useState } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

//my imports
import schema from "./schema";

import Input from "../form_elements/Input";
import Label from "../form_elements/Label";
import GoBack from "../go_back/GoBack";
import Text from "../text/Text";

import { InvoiceInterface } from "../../types";
import leftArrow from "../../assets/icons/icon-arrow-left.svg";
import FormStyles from "./FormStyles";
import FormControl from "../form_elements/FormControl";

type FormProps = {
  values?: InvoiceInterface;
};

function Form({ values }: FormProps) {
  const classes = FormStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const [validating, setValidating] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: validating
      ? yupResolver(schema.validate)
      : yupResolver(schema.no_validate),
  });

  const submitForm = () => {};
  const handleEdit = () => {};

  // MAIN RENDER
  // MAIN RENDER
  return (
    /* 
    This form component is used in two scenarios, first to enter a new invoice ,
    and to edit an existing invoice. When rendering the form for a NEW INVOICE, 
    no props are passed to it, hence the component is rendered as <InvoiceForm/>.
    To edit an invoice, the data of the invoice is passed as a prop, thus <InvoiceForm values ={invoice.values}/>.
    In view of this certain parts of the form are displayed depending on the presence of props.values
    */

    //COMPONENT LAYOUT
    // rendered component has two parts
    //     * AN OVERLAY
    //     * NEW INVOICE CONTENT
    //        #wrapper
    //            --headers
    //            --form
    <>
      {/* ***** OVERLAY ***** */}
      <motion.div
        className={classes.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.1 }}
      ></motion.div>

      {/* ***** FORM CONTENT ***** */}
      <div className={classes.FormContent}>
        <div className={classes.wrapper}>
          {/* form top */}
          <div>
            {values ? (
              <Text as="h1">
                {" "}
                Edit <span>#</span> {values.id}{" "}
              </Text>
            ) : (
              <>
                <div
                  className={classes.goBack}
                  style={{ color: darkTheme ? "white" : "" }}
                  onClick={() => {
                    // TODO
                    // dispatch(hideForm());
                    // resetInputs();
                  }}
                >
                  <img src={leftArrow} alt="" />
                  <Text as="h4">Go back</Text>
                </div>
                <Text as="h2" className={classes.form__heading}>
                  New Invoice
                </Text>
              </>
            )}
          </div>

          {/* ---- form begins ----- */}
          <form onSubmit={handleSubmit(values ? handleEdit : submitForm)}>
            {/* ----- owner details ----- */}
            <Text as="h5" className={classes.group__heading}>
              Bill From
            </Text>
            <div className={classes.form__control}>
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                value={values && values.senderAddress.street}
                {...register("street")}
              />
            </div>

            <div className={classes.city_post_country}>
              <FormControl>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={values && values.senderAddress.city}
                  {...register("city")}
                />
              </FormControl>
              <FormControl>
                <Label htmlFor="postcode">Post Code</Label>
                <Input
                  id="postcode"
                  value={values && values.senderAddress.postCode}
                  {...register("postcode")}
                />
              </FormControl>
              <FormControl>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={values && values.senderAddress.country}
                  {...register("country")}
                />
              </FormControl>
            </div>

            {/* ------ client details -------- */}
            <Text as="h5" className={classes.group__heading}>
              Bill To
            </Text>
            <FormControl>
              <Label htmlFor="clientName">Client's Name</Label>
              <Input
                id="clientName"
                value={values && values.clientName}
                {...register("clientName")}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="clientEmail">Client's Email</Label>
              <Input
                id="clientEmail"
                value={values && values.clientEmail}
                {...register("clientEmail")}
              />
            </FormControl>
            <FormControl>
              <Label htmlFor="clientStreet">Street Address</Label>
              <Input
                id="clientStreet"
                value={values && values.clientAddress.street}
                {...register("clientStreet")}
              />
            </FormControl>

            <div className={classes.city_post_country}>
              <FormControl>
                <Label htmlFor="clientCity">City</Label>
                <Input
                  id="clientCity"
                  value={values && values.clientAddress.city}
                  {...register("clientCity")}
                />
              </FormControl>
              <FormControl>
                <Label htmlFor="clientPostCode">Post Code</Label>
                <Input
                  id="clientPostCode"
                  value={values && values.clientAddress.postCode}
                  {...register("clientPostCode")}
                />
              </FormControl>
              <FormControl>
                <Label htmlFor="clientCountry">Country</Label>
                <Input
                  id="clientCountry"
                  value={values && values.clientAddress.country}
                  {...register("clientCountry")}
                />
              </FormControl>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
