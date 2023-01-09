import {Box, Container, Tab, Typography} from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { SetStateAction, useState } from "react";

import Form from "./components/tabs/form";
import Dashboard from "./components/tabs/dashboard";

function App() {
  const [value, setValue] = useState("1");

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: SetStateAction<string>
  ) => {
    setValue(newValue);
  };
  return (
    <>
      <Container>
        <div>
          <Typography variant={"h3"} >Prueba técnica realizada por Christian Herrera</Typography>
        </div>
        <div
          style={{
            margin: "auto",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                }}
              >
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Formulario1" value="1" />
                  <Tab label="Formulario2" value="2" />
                  <Tab label="Formulario3" value="3" />
                  <Tab label="Dashboard" value="4" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Form page={1} />
              </TabPanel>
              <TabPanel value="2">
                <Form page={2}/>
              </TabPanel>
              <TabPanel value="3">
                <Form page={3} />
              </TabPanel>
              <TabPanel value="4">
                <Dashboard/>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
      </Container>{" "}
    </>
  );
}

export default App;
