import React from "react";
import { Button } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
const Icon = ({
  itemID,
  check,
  updateCheck,
}: {
  itemID: string;
  check: boolean;
  updateCheck: (itemID: string) => void;
}) => {
  return (
    <div style={{ display: "contents" }} onClick={() => updateCheck(itemID)}>
      {check ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
    </div>
  );
};

export const Todo = ({
  itemID,
  name,
  check,
  updateCheck,
}: {
  itemID: string;
  name: string;
  check: boolean;
  updateCheck: (itemId: string) => void;
}) => {
  return (
    <Button
      style={{ justifyContent: "start", alignItems: "center" }}
      fullWidth={true}
      endIcon={<Icon itemID={itemID} check={check} updateCheck={updateCheck} />}
    >
      {name}
    </Button>
  );
};
