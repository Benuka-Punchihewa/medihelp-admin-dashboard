import React, { useState } from "react";
import SearchBar from "../components/common/SearchBar";
import AddButton from "../components/common/AddButton";
import ReportButton from "../components/common/ReportButton";
import { Grid, Box, Typography } from "@mui/material";
import PharmacyTable from "../components/pharmacy/PharmacyTable";
import Popup from "../components/common/Popup";

const Pharmacy = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => setShowPopup(false);

  return (
    <React.Fragment>
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
        Pharmacies
      </Typography>
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
        title="Tile"
        width={300}
        show={showPopup}
        onClose={handlePopupClose}
      >
        Anything can come here!
      </Popup>
    </React.Fragment>
  );
};

export default Pharmacy;
