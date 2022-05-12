import React, { useState } from "react";
import { useAppDispatch } from "../../utils/redux";

// import { addAvatar } from "../../redux/auth/authActions";
import { Card } from "@mui/material";
import Button from "../button/Button";
import SelectImageStyles from "./SelectImageStyles";

type SelectImageProps = {
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
};

function SelectImage({ toggle }: SelectImageProps) {
  const classes = SelectImageStyles();
  const dispatch = useAppDispatch();
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState("Choose File");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setFile(e.target.files![0]);
      setFileName(e.target.files![0].name);
    } catch (err) {
      setFile(null);
      setFileName("Choose File");
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const formData = new FormData();
    //@ts-ignore
    formData.append("file", file);
    if (!file) return;
    // dispatch(addAvatar(formData));
    toggle(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.modal}>
        <Card>
          <form
            className={classes.form}
            encType="multipart/form-data"
            onSubmit={handleSubmit}
          >
            <label htmlFor="choose" className={classes.label}>
              <div>
                {fileName}
                <p>Browse</p>
              </div>
            </label>
            <input
              type="file"
              className={classes.choose}
              id="choose"
              onChange={handleChange}
            />
            <div className={classes.button__section}>
              <Button backgroundColor="#7C5DFA">UPLOAD IMAGE</Button>
              <Button
                onClick={() => {
                  toggle(false);
                }}
                backgroundColor="#ec5757 "
              >
                CANCEL
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default SelectImage;
