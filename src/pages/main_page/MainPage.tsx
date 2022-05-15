import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/redux";
import { motion, AnimatePresence } from "framer-motion";

//my imports
import InvoiceList from "../../components/invoice_list/InvoiceList";
// import Filters from "../filters/Filters";
// import Notification from "../notification/Notification";
import { toggleForm } from "../../state/form_display/formDisplaySlice";
import plus from "../../assets/icons/icon-plus.svg";
import MainPageStyles from "./MainPageStyles";
import Text from "../../components/text/Text";
import Form from "../../components/form/Form";

const listVariants = {
  hidden: {
    x: -1000,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: { type: "tween", duration: 0.5 },
  },
  exit: {
    x: -1000,
    transition: { ease: "easeInOut", duration: 0.1 },
  },
};

function MainPage() {
  const classes = MainPageStyles();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const invoiceData = useAppSelector((state) => state.invoices.invoices);
  console.log(invoiceData);
  const formDisplay = useAppSelector((state) => state.formDisplay);
  // const showNotifications = useSelector((state) => state.notifications.visible);
  const dispatch = useAppDispatch();

  const [filters, setFilters] = useState({
    draft: false,
    pending: false,
    paid: false,
  });

  //   const toggleFilter = (selectedFilter) => {
  //     setFilters((curState) => ({
  //       draft: false,
  //       pending: false,
  //       paid: false,
  //       [selectedFilter]: !curState[selectedFilter],
  //     }));
  //   };

  return (
    <motion.main
      className={classes.MainPage}
      variants={listVariants}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <div className={classes.wrapper}>
        <section className={classes.top}>
          <div className={classes.top__left}>
            <Text as="h4">Invoices</Text>
            <Text as="p">{`${invoiceData.length} invoices`}</Text>
            <Text as="p">{`There are ${invoiceData.length}  total invoices`}</Text>
          </div>
          <div className={`${classes.top__right}`}>
            {/* ...filter */}
            {/* <Filters filters={filters} toggleFilter={toggleFilter} /> */}
            {/* ...add new invoice */}
            <div
              className={classes.new__invoice}
              onClick={() => {
                dispatch(toggleForm());
              }}
            >
              <div className={classes.icon__container}>
                <img src={plus} alt="new invoice" />
              </div>
              <h5>New</h5>
              <h5>New Invoice</h5>
            </div>
          </div>
        </section>

        {/* List goes Heere */}
        <section className={classes.list__container}>
          <InvoiceList filters={filters} />
        </section>

        {/* form */}
        <AnimatePresence>{formDisplay && <Form />}</AnimatePresence>
      </div>
      {/* <div>{<Notification />}</div> */}
    </motion.main>
  );
}

export default MainPage;
