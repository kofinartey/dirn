import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../utils/redux";

//my imports
import { addItemActionCreator } from "../../state/items/items";
import Item from "./Item";
import Label from "../form_elements/Label";
import Input from "../form_elements/Input";
import useInputState from "../../hooks/useInputState";
import ItemListStyles from "./ItemListStyles";
import { ItemInterface } from "../../types";

type ItemsListProps = {
  items?: ItemInterface[];
};

//Remember that this componet only receives props from edit form no new forms
function ItemList({ items }: ItemsListProps) {
  const classes = ItemListStyles();
  const dispatch = useAppDispatch();
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const itemList = useAppSelector((state) => state.items);
  const [itemError, setItemError] = useState(false);
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [total, updateTotal] = useState("");

  //FOR EDIT FORM push the editted invoice's items into the item state
  useEffect(() => {
    if (items) {
      items.map((item) => {
        dispatch(addItemActionCreator(item));
        return item;
      });
    }
  }, [dispatch, items]);

  //update total on price or qty change
  useEffect(() => {
    if (qty === "" || price === "") {
      updateTotal("0");
    } else {
      let calculated = parseFloat(qty) * parseFloat(price);
      updateTotal(calculated.toFixed(2));
    }
  }, [qty, price]);

  const dataToAdd = {
    name: name,
    quantity: parseInt(qty),
    price: parseInt(price),
    total: parseInt(total),
  };

  const validateInputs = () => {
    if (
      name.trim().length > 0 &&
      isNaN(parseInt(name)) &&
      qty.trim().length > 0 &&
      price.trim().length > 0 &&
      !isNaN(parseInt(qty)) &&
      !isNaN(parseInt(price))
    ) {
      return true;
    } else {
      return false;
    }
  };
  validateInputs();

  const handleAdd = (e: any) => {
    e.preventDefault();
    const isValid = validateInputs();
    if (isValid) {
      dispatch(addItemActionCreator(dataToAdd));
      setName("");
      setQty("");
      setPrice("");
    } else {
      setItemError(true);
      setTimeout(() => {
        setItemError(false);
      }, 3000);
    }
  };

  return (
    <div className={classes.ItemList}>
      <h2>Item List</h2>
      <div>
        {itemList.map((item) => (
          <Item
            item={item}
            key={item.name}
            // handleChange={handleChange(item.id)}
          />
        ))}
      </div>
      <div className={classes.form}>
        {/* Had to use a differnt type of input other than the custom built <Input/> 
        component because it was causing a few issues */}
        <div>
          <Label htmlFor="name">Item Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="qty">Qty</Label>
          <Input
            id="qty"
            value={qty}
            onChange={(e) => setQty(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="price">Price</Label>
          <Input
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div
          className={classes.total}
          style={{ color: darkTheme ? "white" : "" }}
        >
          <Label>Total</Label>
          <h4>{total}</h4>
        </div>
        {itemError && (
          <p className={classes.itemError}>*** Invalid Item Entries </p>
        )}
      </div>

      <button
        className={classes.button}
        style={{ backgroundColor: darkTheme ? "#252945" : "" }}
        onClick={handleAdd}
      >
        + Add New Item
      </button>
    </div>
  );
}

export default ItemList;
