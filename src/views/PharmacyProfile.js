import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  Typography,
  Box,
  Stack,
  Grid,
  Autocomplete,
  Button,
  TextField,
  CircularProgress,
} from "@mui/material";
import colors from "../assets/styles/colors";
import SearchBar from "../components/common/SearchBar";
import AddButton from "../components/common/AddButton";
//import ReusableTable from "../components/common/ReusableTable";
//import TableAction from "../components/common/TableActions";
import { useParams } from "react-router-dom";
import { getGlobalMedicines } from "../service/globalMedicines.service";
import { createMedicine } from "../service/medicine.service";
import { popAlert } from "../utils/alerts";
import medicine from "../models/medicine";
import Popup from "../components/common/Popup";

const PharmacyProfile = () => {
  const { id } = useParams();
  const timeoutRef = useRef(null);

  const [inputs, setInputs] = useState(medicine);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSelectDataLoading, setIsSelectDataLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [refresh, setRefresh] = useState(false);

  // select medicine
  const [globalMedicines, setGlobalMedicines] = useState([]);
  const [open, setOpen] = useState(false);
  const [keyword, setKeyword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await createMedicine(id, inputs);

    if (response.success) {
      setRefresh(!refresh);
      response?.data?.message &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {
          setShowPopup(false);
        });
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
    }
    setIsLoading(false);
  };

  const handleClear = () => {
    setInputs(medicine);
  };

  const handlePopupClose = () => setShowPopup(false);

  const memoizedLabel = useMemo(
    () =>
      globalMedicines.find((medi) => medi.id === inputs.globalMedicine._id)
        ?.label || "",
    [inputs.globalMedicine._id]
  );

  const throttle = (func, time) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(func, time);
  };

  //select medicine
  useEffect(() => {
    let unmounted = false;

    if (!unmounted && open) setIsSelectDataLoading(true);

    const fetchAndSet = async () => {
      const response = await getGlobalMedicines(1, 20, "desc", keyword);

      if (response.success) {
        if (!response.data) return;

        let gMedicineArr = [];

        for (const gMedicine of response.data.content) {
          gMedicineArr.push({ label: gMedicine.name, id: gMedicine._id });
        }

        if (!unmounted) {
          setGlobalMedicines(gMedicineArr);
        }
      } else {
        console.error(response?.data);
      }
      if (!unmounted) setIsSelectDataLoading(false);
    };

    if (open) throttle(() => fetchAndSet(), 500);

    return () => {
      unmounted = true;
    };
  }, [keyword, open]);

  useEffect(() => {
    let unmounted = false;

    if (!open && !unmounted) {
      setGlobalMedicines([]);
    }

    return () => {
      unmounted = true;
    };
  }, [open]);

  return (
    <React.Fragment>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 2 }}>
        Pharamacy Profile
      </Typography>

      <Box
        sx={{
          borderRadius: 4,
          backgroundColor: colors.secondary,
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
          p: 1,
        }}
      >
        <Stack flexDirection="row" alignItems="center">
          <img
            src="https://img.freepik.com/free-photo/young-woman-pharmacist-pharmacy_1303-25541.jpg?w=2000"
            alt=""
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 5,
            }}
          />

          <Grid container sx={{ ml: 5 }}>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginBottom: "5px", fontWeight: "bold" }}>
                <Typography variant="p">Samarashingha Pharamacy</Typography>
              </Box>

              <Box>
                <Typography variant="p">RG-GMP-001</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginBottom: "5px" }}>
                <Typography variant="p">42/1A, Apple Rd., Pineapple</Typography>
              </Box>

              <Box>
                <Typography variant="p">0712704856</Typography>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>

      <Typography variant="h5" fontWeight="bold" sx={{ mb: 2, mt: 4 }}>
        Medicines
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={11}>
          <SearchBar />
        </Grid>

        <Grid item xs={1}>
          <AddButton onClick={() => setShowPopup(true)} /> {/**/}
        </Grid>
      </Grid>

      {/* custom popup */}
      <Popup
        title="Add Medicine"
        width={800}
        show={showPopup}
        onClose={handlePopupClose}
      >
        <Box sx={{ mb: 2 }}>
          <form onSubmit={handleSubmit}>
            <Box sx={{ mb: 2 }}>
              <Autocomplete
                id="combo-box-demo"
                fullWidth
                onOpen={() => {
                  setOpen(true);
                }}
                onClose={() => {
                  setOpen(false);
                }}
                isOptionEqualToValue={(option, value) =>
                  option.name === value.name
                }
                value={memoizedLabel}
                onChange={(event, value) => {
                  if (value?.id) {
                    setInputs({
                      ...inputs,
                      globalMedicine: { _id: value.id },
                    });
                  } else {
                    setInputs({
                      ...inputs,
                      globalMedicine: { _id: "" },
                    });
                  }
                }}
                options={globalMedicines}
                loading={isLoading}
                onInputChange={(event, inputValue) => {
                  setKeyword(inputValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Medicine"
                    InputProps={{
                      ...params.InputProps,
                      endAdornment: (
                        <React.Fragment>
                          {isSelectDataLoading ? (
                            <CircularProgress color="inherit" size={20} />
                          ) : null}
                          {params.InputProps.endAdornment}
                        </React.Fragment>
                      ),
                    }}
                  />
                )}
              />
              {errors["name"] && (
                <Typography color="error">{errors["name"]}</Typography>
              )}
            </Box>

            <Box sx={{ mb: 2 }}>
              <TextField
                name="unitPrice"
                variant="filled"
                label="Unit Price"
                fullWidth
                InputProps={{
                  inputProps: { min: 0, step: "any", type: "number" },
                  shrink: "true",
                }}
                value={inputs.unitPrice}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    unitPrice: e.target.value,
                  })
                }
              />
              {errors["unitPrice"] && (
                <Typography color="error">{errors["unitPrice"]}</Typography>
              )}
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                name="stockLevel"
                variant="filled"
                label="Stock Level"
                type="number"
                InputProps={{ inputProps: { min: 0 }, shrink: "true" }}
                fullWidth
                value={inputs.stockLevel}
                onChange={(e) =>
                  setInputs({
                    ...inputs,
                    stockLevel: e.target.value,
                  })
                }
              />
              {errors["stockLevel"] && (
                <Typography color="error">{errors["stockLevel"]}</Typography>
              )}
            </Box>

            <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}>
              <Button
                type="reset"
                variant="contained"
                onClick={handleClear}
                sx={{ py: 2, px: 5, mr: 2, backgroundColor: colors.grey }}
              >
                Clear
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{ py: 2, px: 5 }}
                disabled={isLoading}
              >
                {isLoading ? <CircularProgress color="secondary" /> : "Save"}
              </Button>
            </Box>
          </form>
        </Box>
      </Popup>
    </React.Fragment>
  );
};

export default PharmacyProfile;
