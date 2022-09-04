import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/SideBar";
import NavBar from "./components/common/NavBar";

const App = () => {
  return (
    <React.Fragment>
      <Stack flexDirection="row" sx={{width:'100%' ,display:'block'}}>
        <Box sx={{ width: 250 }}>
          <Sidebar />
        </Box>
        <Box sx={{ }}>
          <Grid container>
            <Grid item xs={12}>
                <NavBar/>
            </Grid>
            <Grid item xs={12}>
              
              
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
