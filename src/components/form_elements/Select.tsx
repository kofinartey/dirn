import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { makeStyles } from "@mui/styles";
import { useAppSelector } from "../../utils/redux";
import colors from "../../utils/colors";
import { fontWeight } from "@mui/system";
import { PaymentTermInterface } from "../../types/index";

type SelectProps = {
  options: {
    id: number;
    value: number;
    name: string;
  }[];
  selectedOption: {
    id: number;
    value: number;
    name: string;
  };
  setSelectedOption: React.Dispatch<React.SetStateAction<PaymentTermInterface>>;
};

function Select({ selectedOption, options, setSelectedOption }: SelectProps) {
  //   const [selectedOption, setSelectedOption] = useState(options[0]);
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const classes = makeStyles({
    wrapper: {
      position: "relative",
    },
    select: {
      width: "100%",
      color: darkTheme ? "white" : "",
      backgroundColor: darkTheme ? colors.dark.primary : "white",
      border: "2px solid #DFE3FA",
      borderColor: darkTheme ? "#252945" : "",
      borderRadius: "0.3rem",
      padding: "0.9rem",
      outline: "none",
      marginTop: "0.75rem",
      textAlign: "left",
      fontWeight: "bold",
      fontSize: "1rem",
      cursor: "pointer",
      "&:focus": {
        border: "2px solid #7C5DFA",
      },
    },
    options: {
      width: "100%",
      position: "absolute",
      top: "4.5rem",
      listStyle: "none",
      color: darkTheme ? "white" : "",
      backgroundColor: darkTheme ? colors.dark.primary : "white",
      borderRadius: "0.5rem",
      boxShadow: darkTheme
        ? `0 10px 20px ${colors.dark.dark}`
        : `0 10px 20px ${colors.grey.light}`,
      " & li": {
        padding: " 1rem",
        borderBottom: "1px solid rgba(0,0,0,0.1)",
        fontWeight: "bold",
        fontSize: "0.8rem",
        "&:hover": {
          color: colors.purple.primary,
        },
      },
      "& li:last-of-type": {
        borderBottom: "none",
      },
    },
  })();
  return (
    <Listbox value={selectedOption} onChange={setSelectedOption}>
      <div className={classes.wrapper}>
        <Listbox.Button className={classes.select}>
          {selectedOption.name}
        </Listbox.Button>
        <Listbox.Options className={classes.options}>
          {options.map((option) => (
            <Listbox.Option
              key={option.id}
              value={option}
              // disabled={option.unavailable}
            >
              {option.name}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default Select;
