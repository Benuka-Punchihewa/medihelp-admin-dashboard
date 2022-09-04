import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/SideBar";

const App = () => {
  return (
    <React.Fragment>
      <Stack flexDirection="row">
        <Box sx={{ width: 250 }}>
          <Sidebar />
        </Box>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
              body
              {/* top navigation bar comes here */}
              {/* views */}
              <BrowserRouter>
                <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
              </BrowserRouter>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </React.Fragment>
  );
};

export default App;
