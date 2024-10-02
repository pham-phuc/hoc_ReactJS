import React from "react";
import { TextField, Button } from "@mui/material";
import { ChangeEvent } from "react";

type Props = {
  itemJobs: string;
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
};

export const CreateNewItems = ({
  itemJobs,
  onInputChange,
  handleAdd,
}: Props) => {
  return (
    <div>
      <TextField size="small" value={itemJobs} onChange={onInputChange} />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};
