import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ReusableTable from "../common/ReusableTable";

const tableColumns = [
  {
    id: "id",
    label: "ID",
  },
  {
    id: "name",
    label: "Name",
    align: "right",
  },
  {
    id: "quantity",
    label: "Quantity",
    align: "right",
  },
  {
    id: "subTotal",
    label: "SubTotal",
    align: "right",
  },
];

const boxStyles = {
  borderRadius: 5,
  boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
  p: 3,
};

const ApprovedOrder = ({ order }) => {
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    let unmounted = false;

    if (order?.medicines) {
      let preparedArr = [];
      for (const medicine of order.medicines) {
        if (medicine?.availability) {
          preparedArr.push({
            id: medicine._id,
            name: medicine?.globalMedicine?.name,
            quantity: medicine?.quantity,
            subTotal: medicine?.subTotal,
          });
        }
      }
      if (!unmounted) setTableRows(preparedArr);
    }

    return () => {
      unmounted = true;
    };
  }, [order]);

  return (
    <React.Fragment>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={12} lg={7}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                style={{ width: "100%", objectFit: "contain", borderRadius: 8 }}
                src={order?.prescriptionSheet}
                alt="prescription sheet"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h7" fontWeight={"bold"} sx={{ mb: 1 }}>
                Medicines
              </Typography>
              <ReusableTable rows={tableRows} columns={tableColumns} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={5}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ ...boxStyles }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Order Status
                </Typography>
                {order?.status}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ ...boxStyles }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Order Summary
                </Typography>
                <Typography>
                  Created At - {new Date(order?.createdAt).toDateString()}
                </Typography>
                <Typography>
                  Sub Total - Rs.{order?.payment?.subtotal}
                </Typography>
                <Typography>
                  Delivery Charges - Rs.{order?.payment?.delivery}
                </Typography>
                <Typography>Total - Rs.{order?.payment?.total}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ ...boxStyles }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Customer Details
                </Typography>
                <Typography>Name - {order?.patient?.name}</Typography>
                <Typography>NIC - R{order?.patient?.NIC}</Typography>
                <Typography>Email - {order?.patient?.email}</Typography>
                <Typography>
                  Contact - {order?.patient?.contactNumber}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ ...boxStyles }}>
                <Typography variant="h6" fontWeight={"bold"}>
                  Delivery Details
                </Typography>
                <Typography>Address - {order?.delivery?.address}</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ApprovedOrder;
