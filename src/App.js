import React from "react";
import { Grid } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item md={2} sx={{ background: "red" }}>
          Sidebar
        </Grid>
        <Grid item md={10} sx={{ background: "red" }}>
          body
          {/* top navigation bar comes here */}
          {/* views */}
          <BrowserRouter>
            <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
          </BrowserRouter>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default App;
