import React from "react";
import {
  DatepickerElement, FileElement,
  InputElement,
  SelectElement,
  TextAreaElement,
} from "./FormElement";

interface Props {
  label: string;
  type: string;
  options: any;
  id: number;
  name: string;
  validations: Array<any>;
  key: number;
}

const Element = (props: Props) => {
  switch (props.type) {
    case "select":
      return <SelectElement {...props} />;
    case "input":
      return <InputElement {...props} />;
    case "date-picker":
      return <DatepickerElement {...props} />;
    case "text-area":
      return <TextAreaElement {...props} />;
    case "file":
      return <FileElement {...props}/>
    default:
      return <></>;
  }
};
const customField = (props: Props) => {
  return (
    <div style={{ marginBottom: 10 }}>
      <Element {...props} />
    </div>
  );
};

export default customField;
