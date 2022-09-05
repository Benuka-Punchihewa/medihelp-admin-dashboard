import { Box, Grid, Modal } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import popupStyles from "../../assets/styles/components/popup";
import CloseIcon from "@mui/icons-material/Close";

const Popup = ({ title, width, show, onClose, children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let unmounted = false;

    if (!unmounted) setOpen(show);

    return () => {
      unmounted = true;
    };
  }, [show]);

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...popupStyles, width: width ? width : 300 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={10}>
                  {title}
                </Grid>
                <Grid item xs={2}>
                  <Stack flexDirection="row" justifyContent="flex-end">
                    <CloseIcon
                      color="error"
                      sx={{
                        cursor: "pointer",
                      }}
                      onClick={onClose}
                    />
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              {children ? children : <></>}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
};

export default Popup;
