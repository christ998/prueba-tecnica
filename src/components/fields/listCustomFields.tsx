import React from "react";
import { form as form_1 } from "../../form/config_1.json";
import { form as form_2 } from "../../form/config_2.json";
import { form as form_3 } from "../../form/config_3.json";
import CustomField from "./customField";

interface Props {
  page: number;
}

function ListCustomFields({ page }: Props) {
  switch (page) {
    case 1:
      return (
        <div>
          {form_1.map((field, index) => (
            <CustomField
              label={field.label}
              type={field.type}
              id={field.id}
              name={field.name}
              options={field.options}
              key={index}
              validations={field.validations}
            />
          ))}
        </div>
      );
    case 2:
      return (
        <div>
          {form_2.map((field, index) => (
            <CustomField
              label={field.label}
              type={field.type}
              id={field.id}
              name={field.name}
              options={field.options}
              key={index}
              validations={field.validations}
            />
          ))}
        </div>
      );
    case 3:
      return (
        <div>
          {form_3.map((field, index) => (
            <CustomField
              label={field.label}
              type={field.type}
              id={field.id}
              name={field.name}
              options={field.options}
              key={index}
              validations={field.validations}
            />
          ))}
        </div>
      );
    default:
      return <></>;
  }
}

export default ListCustomFields;
