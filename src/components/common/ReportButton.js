import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';
import { Box ,Button} from "@mui/material";
import colors from '../../assets/styles/colors';

const ReportButton = () => {
  return (
    <React.Fragment>
        <Box>
        <Button variant="contained"  size="large" 
        sx={{
            backgroundColor:colors.green,
            height:56,
            borderRadius: "5px 5px 5px 5px",
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
            "&:hover":{backgroundColor:colors.darkGreen},}}>
            <ArticleIcon/>
        </Button>
        </Box>
    </React.Fragment>
  )
}

export default ReportButton