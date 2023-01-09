import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useContext } from "react";
import { context } from "../../context/context";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface Props {
  label: string;
  type: string;
  options: any;
  id: number;
  name: string;
  validations: Array<any>;
  key: number;
}

export const SelectElement = (props: Props) => {
  const { state, handleChange } = useContext(context);

  return (
    <FormControl
      fullWidth
      required={props.validations[0] && props.validations[0].type == "required"}
    >
      <InputLabel>{props.label}</InputLabel>
      <Select
        label={props.label}
        id={props.id.toString()}
        name={props.name}
        onChange={(event) => {
          handleChange({ [event.target.name]: event.target.value });
        }}
      >
        {props.options.map((prop, index: number) => {
          return (
            <MenuItem key={index} value={prop.value}>
              {prop.value}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export const InputElement = (props: Props) => {
  const { state, handleChange } = useContext(context);

  return (
    <TextField
      name={props.name}
      key={props.key}
      label={props.label}
      required={props.validations[0] && props.validations[0].type == "required"}
      onChange={(event) => {
        handleChange({ [event.target.name]: event.target.value });
      }}
    />
  );
};
export const DatepickerElement = (props: Props) => {
  const { state, handleChange } = useContext(context);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label}
        inputFormat={"DD/MM/YYYY"}
        value={state[props.name] ? state[props.name] : null}
        onChange={(newValue) => {
          handleChange({ [props.name]: newValue });
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};
export const TextAreaElement = (props: Props) => {
  const { state, handleChange } = useContext(context);

  return (
    <TextField
      name={props.name}
      label={props.label}
      multiline
      rows={4}
      onChange={(event) => {
        handleChange({ [event.target.name]: event.target.value });
      }}
    />
  );
};
export const FileElement = (props:Props) => {
  const { state, handleChange } = useContext(context);

  return (
    <Button variant="outlined" component="label">
      Upload File
      <input
        type="file"
        hidden
        accept=".csv"
        onChange={(e) => {
          handleChange({ archivo: e.target.files[0].name })
          console.log(e.target.files[0].name)
        }}
      />
    </Button>
  );
};
