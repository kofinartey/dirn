import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";

//my imports
import schema from "./schema";
import { generateID } from "../../helper_functions/generateID";
import Label from "../form_elements/Label";
import Input from "../form_elements/Input";
import Select from "../form_elements/Select";
import GoBack from "../go_back/GoBack";
import Text from "../text/Text";
import Button from "../button/Button";
import ItemList from "../items_list/ItemList";
import { addInvoiceActionCreator } from "../../state/invoices/invoices";
import { resetItemActionCreator } from "../../state/items/items";
import { toggleForm } from "../../state/form_display/formDisplaySlice";
import { InvoiceInterface, PaymentTermInterface } from "../../types";
import FormInputInterface from "./FormInputTypes";
import leftArrow from "../../assets/icons/icon-arrow-left.svg";
import FormStyles from "./FormStyles";
import FormControl from "../form_elements/FormControl";
import colors from "../../utils/colors";

type FormProps = {
  values?: InvoiceInterface;
};

//MAIN COMPONENT FUNCTION
//MAIN COMPONENT FUNCTION
function Form({ values }: FormProps) {
  const classes = FormStyles();
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const itemList = useAppSelector((state) => state.items);
  const [itemListError, setItemListError] = useState(true);
  const [validating, setValidating] = useState(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputInterface>({
    mode: "onBlur",
    resolver: validating
      ? yupResolver(schema.validate)
      : yupResolver(schema.no_validate),
  });

  const [total, setTotal] = useState(0);
  //handle date and calculate due date from payTerms
  //recalculate dueDate anytime date or payment terms change(s)
  const today = dayjs(new Date()).format("YYYY-MM-DD");
  const [date, setDate] = useState(today);

  const paymentTermOptions: PaymentTermInterface[] = [
    { id: 1, value: 1, name: "Net 1 Day" },
    { id: 2, value: 7, name: "Net 7 Days" },
    { id: 3, value: 14, name: "Net 14 Days" },
    { id: 4, value: 30, name: "Net 30 Days" },
  ];
  const [payTerms, setPayTerms] = useState(paymentTermOptions[0]);
  const [dueDate, setDueDate] = useState(
    dayjs(date).add(payTerms.value, "days").format("D MMM YYYY")
  );
  useEffect(() => {
    setDueDate(dayjs(date).add(payTerms.value, "days").format("D MMM YYYY"));
  }, [date, payTerms]);

  //monitor itemlist length and change errors accordingly
  useEffect(() => {
    if (itemList.length > 0) setItemListError(false);
    else setItemListError(true);
  }, [itemList]);

  const resetAll = () => {
    dispatch(toggleForm());
    reset();
    dispatch(resetItemActionCreator());
    setDate(today);
    setPayTerms(paymentTermOptions[0]);
  };

  //add new invoice to state ,hide form and reset input fields
  const submitForm: SubmitHandler<FormInputInterface> = (data) => {
    console.log("submitting");
    if (validating && itemListError) {
      console.log("Add and item ");
      return;
    }
    //define the shape of the object to send to the server
    let dataToAdd = {
      id: generateID(),
      createdAt: dayjs(date).format("D MMM YYYY"),
      paymentDue: dueDate,
      description: data.description,
      paymentTerms: payTerms.value,
      clientName: data.clientName,
      clientEmail: data.clientEmail,
      status: validating ? "pending" : "draft",
      senderAddress: {
        street: data.street,
        city: data.city,
        postCode: data.postcode,
        country: data.country,
      },
      clientAddress: {
        street: data.clientStreet,
        city: data.clientCity,
        postCode: data.clientPostCode,
        country: data.clientCountry,
      },
      items: itemList,
      total: itemList.length === 0 ? 0 : total,
    };
    //decide whether to send complete form or send draft
    dispatch(addInvoiceActionCreator(dataToAdd));
    resetAll();
    //TODO
    // if (validating) dispatch(postInvoice(dataToAdd));
    // resetAll();
    // else dispatch(postDraft(dataToAdd));
  };

  const handleEdit: SubmitHandler<FormInputInterface> = (data) => {
    console.log("editing");
  };
  //remove validation for draft and reset validation state
  //NB: clicking on draft button calls both handleSaveDraft() and submitForm()
  const handleSaveDraft = () => {
    setValidating(false);
    setTimeout(() => {
      setValidating(true);
    }, 100);
  };

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
        onClick={() => {
          resetAll();
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {/* ***** FORM CONTENT ***** */}
      <div
        className={classes.FormContent}
        style={{ backgroundColor: darkTheme ? colors.dark.dark : "" }}
      >
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

          {/* <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("submitting");
            }}
          > */}
          <form onSubmit={handleSubmit(values ? handleEdit : submitForm)}>
            {/* ----- owner details ----- */}
            <h5 className={classes.group__heading}>Bill From</h5>
            <FormControl>
              <Label htmlFor="street">Street Address</Label>
              <Input
                id="street"
                value={values && values.senderAddress.street}
                {...register("street")}
              />
              <small className={classes.errors}>{errors.street?.message}</small>
            </FormControl>

            <div className={classes.city_post_country}>
              <FormControl>
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={values && values.senderAddress.city}
                  {...register("city")}
                />
                <p className={classes.errors}>{errors.city?.message}</p>
              </FormControl>
              <FormControl>
                <Label htmlFor="postcode">Post Code</Label>
                <Input
                  id="postcode"
                  value={values && values.senderAddress.postCode}
                  {...register("postcode")}
                />
                <p className={classes.errors}>{errors.postcode?.message}</p>
              </FormControl>
              <FormControl>
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={values && values.senderAddress.country}
                  {...register("country")}
                />
                <p className={classes.errors}>{errors.country?.message}</p>
              </FormControl>
            </div>

            {/* ------ client details -------- */}
            <h5 className={classes.group__heading}>Bill To</h5>
            <FormControl>
              <Label htmlFor="clientName">Client's Name</Label>
              <Input
                id="clientName"
                value={values && values.clientName}
                {...register("clientName")}
              />
              <p className={classes.errors}>{errors.clientName?.message}</p>
            </FormControl>
            <FormControl>
              <Label htmlFor="clientEmail">Client's Email</Label>
              <Input
                id="clientEmail"
                value={values && values.clientEmail}
                {...register("clientEmail")}
              />
              <p className={classes.errors}>{errors.clientEmail?.message}</p>
            </FormControl>
            <FormControl>
              <Label htmlFor="clientStreet">Street Address</Label>
              <Input
                id="clientStreet"
                value={values && values.clientAddress.street}
                {...register("clientStreet")}
              />
              <p className={classes.errors}>{errors.clientStreet?.message}</p>
            </FormControl>

            <div className={classes.city_post_country}>
              <FormControl>
                <Label htmlFor="clientCity">City</Label>
                <Input
                  id="clientCity"
                  value={values && values.clientAddress.city}
                  {...register("clientCity")}
                />
                <p className={classes.errors}>{errors.clientCity?.message}</p>
              </FormControl>
              <FormControl>
                <Label htmlFor="clientPostCode">Post Code</Label>
                <Input
                  id="clientPostCode"
                  value={values && values.clientAddress.postCode}
                  {...register("clientPostCode")}
                />
                <p className={classes.errors}>
                  {errors.clientPostCode?.message}
                </p>
              </FormControl>
              <FormControl>
                <Label htmlFor="clientCountry">Country</Label>
                <Input
                  id="clientCountry"
                  value={values && values.clientAddress.country}
                  {...register("clientCountry")}
                />
                <p className={classes.errors}>
                  {errors.clientCountry?.message}
                </p>
              </FormControl>
            </div>

            <div className={classes.pay__date}>
              <FormControl>
                <Label htmlFor="invoiceDate">Invoice Date</Label>
                <Input
                  type="date"
                  id="invoiceDate"
                  value={values ? values.createdAt : date}
                  onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl>
                <Label htmlFor="invoiceDate">Payment Terms</Label>
                <Select
                  options={paymentTermOptions}
                  selectedOption={payTerms}
                  setSelectedOption={setPayTerms}
                />
              </FormControl>
            </div>

            <FormControl>
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                value={values && values.description}
                {...register("description")}
              />
              <p className={classes.errors}>{errors.description?.message}</p>
            </FormControl>

            {/* ----- ITEM DETAILS ----- */}
            <div className={classes.itemList}>
              <ItemList items={values && values.items} />
            </div>

            {/* error if no item is added */}
            {itemListError && (
              <p className={classes.itemError}>
                ** Please add an item or save as draft for later
              </p>
            )}

            <footer className={classes.footer}>
              {/* display different versions of the footer for new and edit forms */}
              <Button
                type="button"
                color={darkTheme ? "white" : colors.dark.primary}
                backgroundColor={darkTheme ? "#252945" : colors.grey.light}
                onClick={(e) => {
                  e.preventDefault();
                  resetAll();
                }}
              >
                Discard
              </Button>
              {!values && (
                <Button
                  color="white"
                  backgroundColor="#373B53"
                  onClick={handleSaveDraft}
                >
                  Save as Draft
                </Button>
              )}
              <Button color="white" backgroundColor="#7C5DFA" type="submit">
                {values ? "Save Changes" : "Save & Send"}
              </Button>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
