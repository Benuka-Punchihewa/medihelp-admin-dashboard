import { Mail, Notifications, Pets  } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import colors from "../../assets/style/colour";
import commonStyles from "../../assets/common";
  

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

function NavBar() {
    const [open, setOpen] = useState(false);

  return (
    <React.Fragment>
        
        <Box
          sx={{
            borderRadius: 3,
            backgroundColor: colors.secondary,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
            p: 3,
            width: 1000,
            ml:25,
          }}
        >
    
      <Icons sx={{ 
           ml:110,
       }}>
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
        
         <UserBox onClick={(e) => setOpen(true)}>
           <Avatar
             sx={{ width: 30, height: 30 }}
             src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
           />
           <Typography variant="span">John</Typography>
         </UserBox>
       
          
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
  )
}

export default NavBar