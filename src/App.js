import React from "react";
import { Box, Grid, Stack} from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//common
import Sidebar from "./components/common/SideBar";
import NavBar from "./components/common/NavBar";

//view
import Dashboard from "./views/Dashboard";
import Pharmacy from "./views/Pharmacy";


const App = () => {
  return (
    <React.Fragment>
      <Stack flexDirection="row">
        <Box sx={{ width: "20vw" }}>
          <Sidebar />
        </Box>
        <Box sx={{ width: "80vw", padding: 3 }}>
          <Grid container>
            <Grid item xs={12} >
              <NavBar />
              </Grid>
            <Grid item xs={12} sx={{pt:3}}>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/pharmacy" element={<Pharmacy />} />
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
