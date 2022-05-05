import { useAppSelector, useAppDispatch } from "../../utils/redux";
import { makeStyles } from "@mui/styles";
//my imports
import { ItemInterface } from "../../types";
import { removeItermActionCreator } from "../../state/items/items";
import ItemStyles from "./ItemStyles";
import Label from "../form_elements/Label";
import formatAmount from "../../helper_functions/formatAmount";
import trashCan from "../../assets/icons/icon-delete.svg";

//create a small component to use in this main component.
const ItemPart = (props: { children: React.ReactNode }) => {
  const darkTheme = useAppSelector((state) => state.darkTheme);
  const styles = makeStyles({
    item_part: {
      color: darkTheme ? "white" : "#888EB0",
      backgroundColor: darkTheme ? "#1E2139" : "rgba(223, 227, 250, 0.4 )",
      padding: "1rem",
      borderRadius: "0.5rem",
    },
  });
  const classes = styles();
  return <h4 className={classes.item_part}>{props.children}</h4>;
};

///MAIN COMPONENT FUNCTION
///MAIN COMPONENT FUNCTION
///MAIN COMPONENT FUNCTION
type ItemProps = {
  item: ItemInterface;
};
function Item(props: ItemProps) {
  const { item } = props;
  const classes = ItemStyles();
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(removeItermActionCreator(item.name));
  };

  //onchange
  //  take item id, run to item list and single out that item
  //  return new item object
  //  set event.taget.name to value

  return (
    <div className={classes.Item}>
      <div className={classes.form__control}>
        <Label htmlFor="name">Item Name</Label>
        <ItemPart>{item.name}</ItemPart>
      </div>
      <div className={classes.form__control}>
        <Label htmlFor="qty">Qty.</Label>
        <ItemPart>{item.quantity}</ItemPart>
      </div>
      <div className={classes.form__control}>
        <Label htmlFor="price">Price</Label>
        <ItemPart>{formatAmount(item.price)}</ItemPart>
      </div>
      <div className={classes.form__control}>
        <Label htmlFor="total">Total</Label>
        <ItemPart>{formatAmount(item.total)}</ItemPart>
      </div>
      <div
        className={`${classes.form__control} ${classes.delete}`}
        onClick={handleDelete}
      >
        <img src={trashCan} alt="" />
      </div>
    </div>
  );
}

export default Item;
