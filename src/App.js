import React from "react";
import { Grid ,Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/SideBar";

const App = () => {
  return (
    <React.Fragment>
    <Stack flexDirection="row">
      <Sidebar/>

      <Grid container spacing={3}>
        <Grid item xs={12} >
        
        </Grid>
        <Grid item xs={12}>
          body
          {/* top navigation bar comes here */}
          {/* views */}

          <BrowserRouter>
            <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
          </BrowserRouter>
          
        </Grid>
      </Grid>

      
    </Stack>

    
     

    </React.Fragment>
  );
};

export default App;
