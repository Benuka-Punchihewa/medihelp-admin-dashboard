import { Mail, Notifications } from "@mui/icons-material";
import { Avatar, Badge, Box, Menu, MenuItem, styled } from "@mui/material";
import React, { useState } from "react";
import colors from "../../assets/styles/colors";

const Icons = styled(Box)(({ theme }) => ({
  alignItems: "center",
  gap: "20px",
  display: "flex",
  justifyContent: "flex-end",
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
      <Box
        sx={{
          borderRadius: 3,
          backgroundColor: colors.secondary,
          boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
          p: 3,
        }}
      >
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>

        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          open={open}
          onClose={(e) => setOpen(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
        </Menu>
      </Box>
    </React.Fragment>
  );
}

export default NavBar;
