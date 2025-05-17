import { Button, TextField, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import React from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: (theme.vars ?? theme).palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

function Form() {
  return (
<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid size={6} >
    <Item>
    <Typography variant="h5">Login</Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            fullWidth
            id="username"
            label="Enter Your Name"
            name="username"
            autoComplete="username"
            autoFocus
          />
        </Box>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 ,py: 1}}
        >
          LOGIN
        </Button>
    </Item>
  </Grid>
  <Grid size={6} sx={{background:"#D3E1E7",height:"100%",position:"relative",borderRadius:"0 15px 15px 0",padding:".4rem"}}>
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"flex-end"}}>
        <Box>
        <img style={{width:"250px"}} src="./src/assets/images/Moon-cloud-mid-rain.png"/>
        </Box>
        
        <Box>
        <img style={{width:"250px",position:"absolute",top: "25%",left:"0%"}} src="./src/assets/images/Sun-cloud-angled-rain.png"/>
        </Box>
        
        <Box>
        <img style={{width:"250px"}} src="./src/assets/images/Moon-cloud-fast-wind.png"/>
        </Box>
        
        
    </Box>
    
  </Grid>
 



</Grid>
  );
}

export default Form;
