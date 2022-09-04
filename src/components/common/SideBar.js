import React from "react";
import { Grid, Stack, Typography } from "@mui/material";
import {
  Dashboard,
  Medication,
  ShoppingBag,
  Payment,
  Vaccines,
  Logout,
  Person,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import colors from "../../assets/styles/colors";

const Sidebar = () => {
  return (
    <Box
      position="fixed"
      sx={{
        display: {
          xs: "none",
          sm: "block",
          background: colors.primary,
          color: colors.white,
          height: "100vh",
          width: "20vw",
        },
      }}
    >
      <Grid item xs={8}>
        <Stack
          direction="row"
          spacing={5}
          justifyContent="center"
          textAlign="center"

          sx={{ height: "100%" }}
        >
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", color: colors.white ,mt:2}}
          >
            MediHelp
          </Typography>
        </Stack>
      </Grid>

      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/dashboard">
            <ListItemIcon sx={{ display: { color: colors.white } }}>
              <Dashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon sx={{ display: { color: colors.white } }}>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Users" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/pharmacy">
            <ListItemIcon sx={{ display: { color: colors.white } }}>
              <Medication />
            </ListItemIcon>
            <ListItemText primary="Pharmacies" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon sx={{ display: { color: colors.white } }}>
              <ShoppingBag />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon sx={{ display: { color: colors.white } }}>
              <Vaccines />
            </ListItemIcon>
            <ListItemText primary="Medicines" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon sx={{ display: { color: colors.white } }}>
              <Payment />
            </ListItemIcon>
            <ListItemText primary="Payments" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#simple-list">
            <ListItemIcon sx={{ display: { color: colors.white } }}>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
