import React from "react";
import SearchBar from "../components/common/SearchBar";
import AddButton from "../components/common/AddButton";
import ReportButton from "../components/common/ReportButton";
import { Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <SearchBar />
        </Grid>
        <Grid item xs={1}>
          <AddButton />
        </Grid>
        <Grid item xs={1}>
          <ReportButton />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
