import React, { useState } from "react";
import ListCustomFields from "../fields/listCustomFields";
import { Alert, AlertTitle, Button } from "@mui/material";
import { context } from "../../context/context";

const Form = ({page}) => {
  const [state, setState] = useState({});
  const [alert, setAlert] = useState(false);

  const handleChange = (data: Object) => {
    setState(prevState => ({
      ...prevState,
      ...data,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const toRegister = {...state, fecha: new Date()}
    localStorage.setItem(new Date().toString(), JSON.stringify(toRegister));
    setAlert(true);
    setTimeout(() => setAlert(false), 2000);
  };
  return (
    <div>
      {alert && (
        <Alert severity="success">
          <AlertTitle>
            <strong>Registrado</strong>
          </AlertTitle>
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <context.Provider value={{ state, handleChange }}>
          <ListCustomFields page={page} />
        </context.Provider>
        <Button variant="contained" type="submit">
          Registrar
        </Button>
      </form>
    </div>
  );
};

export default Form;
