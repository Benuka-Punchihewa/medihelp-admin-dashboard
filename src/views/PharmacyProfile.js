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
import ReusableTable from "../components/common/ReusableTable";
import TableAction from "../components/common/TableActions";
import { useParams } from "react-router-dom";
import { getGlobalMedicines } from "../service/globalMedicines.service";
import { createMedicine, getAllMedicines } from "../service/medicine.service";
import { popAlert } from "../utils/alerts";
import medicine from "../models/medicine";
import Popup from "../components/common/Popup";

const tableColumns = [
  {
    id: "name",
    label: "Name",
    minWidth: 140,
    align: "left",
  },
  {
    id: "strength",
    label: "Strength",
    align: "right",
  },
  {
    id: "stockLevel",
    label: "Stock Level",
    align: "right",
  },

  {
    id: "unitPrice",
    label: "Unit Price",
    align: "right",
  },
  {
    id: "action",
    label: "Action",

    align: "right",
  },
];

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
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    orderBy: "desc",
  });
  const [keyword, setKeyword] = useState("");
  const [tableRows, setTableRows] = useState([]);
  const [totalElements, setTotalElements] = useState(0);

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

  const handlePageChange = (page) => {
    setPagination({ ...pagination, page: page });
  };

  const handleLimitChange = (limit) => {
    setPagination({ ...pagination, limit: limit });
  };

  const handleEdit = (id) => {
    console.log(id);
  };

  const handleDelete = (id) => {
    console.log(id);
  };

  const handleSearch = (input) => {
    setKeyword(input);
  };

  const memoizedLabel = useMemo(
    () =>
      globalMedicines.find((medi) => medi.id === inputs.globalMedicine._id)
        ?.label || "",
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputs.globalMedicine._id]
  );

  const throttle = (func, time) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(func, time);
  };

  
  //select pharmacies
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

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) setIsLoading(true);

    const fetchAndSet = async () => {
      const response = await getAllMedicines(
        id,
        pagination.page,
        pagination.limit,
        pagination.orderBy,
        keyword
      );

      if (response.success) {
        if (!response.data) return;

        let tableDataArr = [];
        for (const medicine of response.data.content) {
          tableDataArr.push({
            name: medicine.global.doc.name,
            strength: medicine.global.doc.strength,
            stockLevel: medicine.stockLevel,
            unitPrice: medicine.unitPrice,
            action: (
              <TableAction
                id={medicine._id}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ),
          });
        }

        if (!unmounted) {
          setTotalElements(response.data.totalElements);
          setTableRows(tableDataArr);
        }
      } else {
        console.error(response?.data);
      }
      if (!unmounted) setIsLoading(false);
    };

    fetchAndSet();

    return () => {
      unmounted = true;
    };
  }, [pagination, refresh, keyword, id]);

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
                <Typography variant="p">Osil Pharmacy</Typography>
              </Box>

              <Box>
                <Typography variant="p">GMP-MIR-008</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginBottom: "5px" }}>
                <Typography variant="p">
                  42/1A, Colombo Rd., Kadawatha
                </Typography>
              </Box>

              <Box>
                <Typography variant="p">0332239745</Typography>
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
          <SearchBar
            onSearch={handleSearch}
            placeholderText="Search Medicines..."
          />
        </Grid>

        <Grid item xs={1}>
          <AddButton onClick={() => setShowPopup(true)} /> {/**/}
        </Grid>
      </Grid>

      {isLoading ? (
        <Box
          sx={{
            width: "100%",
            mt: "3%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress sx={{ mr: 2 }} />
          Loading...
        </Box>
      ) : (
        <Box
          sx={{
            width: "100%",
            backgroundColor: "#fff",
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
            mt: "3%",
          }}
        >
          <ReusableTable
            rows={tableRows}
            columns={tableColumns}
            totalElements={totalElements}
            limit={pagination.limit}
            page={pagination.page}
            onPageChange={handlePageChange}
            onLimitChange={handleLimitChange}
          />
        </Box>
      )}

      {/* custom popup */}
      <Popup
        title="Add Medicine"
        width={800}
        show={showPopup}
        onClose={handlePopupClose}
      >
        <Box sx={{ mb: 2, mt: 1 }}>
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
