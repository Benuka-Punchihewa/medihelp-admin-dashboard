import React from 'react'
import SearchBar from "../components/common/SearchBar";
import AddButton from '../components/common/AddButton';
import ReportButton from '../components/common/ReportButton';
import { Grid,Box } from "@mui/material";
import PharmacyTable from '../components/Pharmacy/PharmacyTable';


const Pharmacy = () => {
  return (
    
    <React.Fragment>
        <Grid container spacing={2}>
      <Grid item xs={10}>
            <SearchBar/>
      </Grid>
      <Grid item xs={1}>
          <AddButton/>
      </Grid>
      <Grid item xs={1}>
          <ReportButton/>
      </Grid>
        
    </Grid>
    <Box sx={{
              width:'100%',
              backgroundColor: "#fff",
              boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
              mt:'3%',
            }}>
        <PharmacyTable/>
      
    </Box>
    </React.Fragment>
  )
}

export default Pharmacy