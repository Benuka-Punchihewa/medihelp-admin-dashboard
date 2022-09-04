import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/common/SideBar";
import NavBar from "./components/common/NavBar";
import Dashboard from "./views/Dashboard";

const App = () => {
  return (
    <React.Fragment>
      <Stack flexDirection="row">
        <Box sx={{ width: "20vw" }}>
          <Sidebar />
        </Box>
        <Box sx={{ width: "80vw", padding: 3 }}>
          <Grid container>
            <Grid item xs={12}>
              <NavBar />
            </Grid>
            <Grid item xs={12}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                </Routes>
              </BrowserRouter>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </React.Fragment>
  );
};

export default App;
