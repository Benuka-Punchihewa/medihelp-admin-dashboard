import React, { useState } from "react";
import {
         Box,
         Typography,
         TextField,
         Button,
         CircularProgress,
       } from "@mui/material";
import commonStyles from "../assets/styles/common";
import colors from '../assets/styles/colors';
import signup from "../models/signIn";
import {createUser} from "../service/signIn.service";
import { popAlert } from "../utils/alerts";

const SignIn = () => {
  const [inputs, setInputs] = useState(signup);
  const [errors, setErrors] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await createUser(inputs);

    if (response.success) {
      setRefresh(!refresh);
      response?.data?.message &&
        popAlert("Success!", response?.data?.message, "success").then((res) => {});
    } else {
      response?.data?.message &&
        popAlert("Error!", response?.data?.message, "error");
      response?.data?.data && setErrors(response.data.data);
    }
    setLoading(false);
  };
   
  return (
    <React.Fragment>
        <Box
         sx={{
           ...commonStyles.bodyContainer,
           textAlign:"center"
         }}
       >
         <Box
           sx={{
             borderRadius: 6,
             backgroundColor: colors.secondary,
             boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
             p: 5,
           }}
         >
                      
        <Box sx={{ mb: 2 }}>
          <Typography variant="h4" fontWeight="bold" color="primary" textAlign={"center"} sx={{ mb: 6}}>
                  Sign In
            </Typography>
            <form onSubmit={handleSubmit}> 
              <Box sx={{ mb: 2 ,m: 3}}>
                <TextField
                  id="outlined-basic"
                  variant="filled"
                  label="Email"
                  fullWidth
                  value={inputs.email}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      email:e.target.value,
                    })
                  }
                />
                {errors["email"] && (
                  <Typography color="error">{errors["email"]}</Typography>
                )}
            </Box>

            <Box sx={{ mb: 2,m: 3,mt:6}}>
              <TextField
                id="outlined-password-input"
                variant="filled"
                label="Password"
                type="password"
                  fullWidth
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({
                      ...inputs,
                      password:e.target.value,
                    })
                  }
              />
              {errors["password"] && (
                <Typography color="error">{errors["password"]}</Typography>
              )}
            </Box>

            <Box sx={{ml:50}}>
                <Typography variant="h7" color="primary" >
                      Forget Your Password ? 
                </Typography>
            </Box>
            <Box sx={{m: 2}}>
                <Button 
                  type="submit"
                  variant="contained"
                  fullWidth 
                  disabled={loading}>
                    {loading ? <CircularProgress color="secondary" /> : "Sign In"}
                    </Button>
            </Box>
          </form>
            <Box textAlign={"center"}>
                <Typography variant="h7" color="primary" >
                      Do you need to create an account? 
                </Typography>
            </Box>
          </Box>
         
         </Box>
         
     </Box>

    </React.Fragment>
  )
}

export default SignIn