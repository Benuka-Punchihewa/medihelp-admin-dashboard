import React from 'react'
import {
    Box,
    Button,
    CircularProgress,
    Grid,
    Stack,
    InputBase,
    TextField,
    styled,
    Typography,
} from "@mui/material";

import colors from '../../assets/style/colour';

function SerchBar() {
  return (

<React.Fragment>


<Stack flexDirection="row" alignItems='center' mt='5px' justifyContent='center' p='20px'>  
      <Box position='relative' mb='72px' ml='260px'>
        <TextField
        sx={{
          input: {
            fontWeight:'700',
            border:'none'
            
          },
          width: {
            lg:'800px',
          },
          backgroundColor:'#fff',
          borderRadius: '5px',
        boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
        
        }}
        height='76px'
        // value={search}
        // onChange={(e)=> setSearch(e.target.value.toLowerCase())}
        placeholder='Search Pharmacies..'
        type='text'
        />
        <Button className='search-btn'
        sx={{
            borderRadius: 1,
            backgroundColor: colors.primary,
            boxShadow: "0px 8px 25px rgba(0, 0, 0, 0.25)",
          textTransform:'none',
          width: {lg:'175px', xs: '80px'},
          fontSize: {lg:'20px', xs: '14px'},
          height:'56px',
          position:'absolute',
          right:'0',
          color:'#ffff'
        }}
        // onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{position : 'relative', width: '100%', p:'20px'}}>
        {/* <HorizontalScrolbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/> */}
      </Box>

    </Stack>

    
        
        {/* <Button variant="contained" color="success" position='absolute' ml='10px' right='0'>
            Success
        </Button> */}

        <Button>

        </Button>
 
    
        </React.Fragment> 
    
  )
}

export default SerchBar