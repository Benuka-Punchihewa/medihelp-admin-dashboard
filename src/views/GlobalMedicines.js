import React, { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import AddButton from "../components/common/AddButton";
import ReportButton from "../components/common/ReportButton";
import { Grid, Box, TextField, MenuItem, Typography, CircularProgress, Button } from "@mui/material";
import PharmacyTable from "../components/Pharmacy/PharmacyTable";
import Popup from "../components/common/Popup";
import globalMedicine from "../models/globalMedicine";
import { createGlobalMedicine } from "../service/globalMedicines.service";
import { popAlert } from "../utils/alerts";
import colors from "../assets/styles/colors";

const GlobalMedicens = () => {

    const [inputs, setInputs] = useState(globalMedicine);
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
    
        const response = await createGlobalMedicine(inputs);
    
        if (response.success) {
          response?.data?.message &&
            popAlert("Success!", response?.data?.message, "success").then((res)=>{setShowPopup(false)})

        } else {
          response?.data?.message &&
            popAlert("Error!", response?.data?.message, "error");
          response?.data?.data && setErrors(response.data.data);
        }
        setLoading(false);
    };


    const handleClear = () => {
        setInputs(globalMedicine);
    }
  
    

    const handlePopupClose = () => setShowPopup(false);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <SearchBar />
        </Grid>
        <Grid item xs={1}>
          <AddButton onClick={() => setShowPopup(true)} />
        </Grid>
        <Grid item xs={1}>
          <ReportButton />
        </Grid>
      </Grid>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#fff",
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
          mt: "3%",
        }}
      >
        <PharmacyTable />
      </Box>

      {/* custom popup */}
      <Popup
        title="Add Medicine"
        width={800}
        show={showPopup}
        onClose={handlePopupClose}
      >
    
        <Box sx={{mb: 2}}>
            <form onSubmit={handleSubmit}>
                <Box sx={{ mb:2 }}>
                    <TextField
                    name="name"
                    variant="filled"
                    label="Name"
                    fullWidth
                    value={inputs.name}
                    onChange={(e) =>
                        setInputs({
                          ...inputs, name: e.target.value})
                      }
                    />
                    {errors["name"] && (
                        <Typography color="error">
                        {errors["name"]}
                        </Typography>
                    )}
                </Box>
                <Box sx={{ mb:2 }}>
                    <TextField
                    name="strength"
                    variant="filled"
                    label="Strength (mg)"
                    type="number"
                    fullWidth
                    InputProps={{inputProps: {  min: 0 }, shrink:"true"}}
                    value={inputs.strength}
                    onChange={(e) =>
                        setInputs({
                          ...inputs, strength: e.target.value})
                      }
                    />
                    {errors["strength"] && (
                        <Typography color="error">
                        {errors["strength"]}
                        </Typography>
                    )}
                    
                </Box>
                <Box sx={{ mb:2 }}>
                    <TextField
                    name="brand"
                    variant="filled"
                    label="Brand"
                    fullWidth
                    value={inputs.brand}
                    onChange={(e) =>
                        setInputs({
                          ...inputs, brand: e.target.value})
                      }
                    />
                    {errors["brand"] && (
                        <Typography color="error">
                        {errors["brand"]}
                        </Typography>
                    )}
                    
                </Box>
                <Box sx={{ mb:2 }}>
                    <TextField
                    name="manufacturer"
                    variant="filled"
                    label="Manufacturer"
                    fullWidth
                    value={inputs.manufacturer}
                    onChange={(e) =>
                        setInputs({
                          ...inputs, manufacturer: e.target.value})
                      }
                    />
                    {errors["manufacturer"] && (
                        <Typography color="error">
                        {errors["manufacturer"]}
                        </Typography>
                    )}
                    
                </Box>
                <Box sx={{ mb:2 }}>
                    <TextField
                    select
                    name="type"
                    variant="filled"
                    label="Type"
                    helperText="Please select prescription type."
                    fullWidth
                    value={inputs.type}
                    onChange={(e) =>
                        setInputs({
                          ...inputs, type: e.target.value})}
                    >
                     <MenuItem value="prescription">Prescription</MenuItem>
                     <MenuItem value="non-prescription">Non-Prescription</MenuItem>   
                    </TextField>
                    {errors["type"] && (
                        <Typography color="error">
                        {errors["type"]}
                        </Typography>
                    )}    
                </Box>
                <Box sx={{ mb: 2 ,display: "flex", justifyContent: "flex-end" }}>
                    <Button
                        type="reset"
                        variant="contained"
                        onClick={handleClear}
                        sx={{ py: 2, px: 5 , mr: 2, backgroundColor:colors.grey}}
                    >Clear
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ py: 2, px: 5 }}
                        disabled={loading}
                    >
                    {loading ? <CircularProgress color="secondary" /> : "Save"}
                    </Button>
              </Box>
            </form>
        </Box>
      </Popup>
    </React.Fragment>
  );
}

export default GlobalMedicens;