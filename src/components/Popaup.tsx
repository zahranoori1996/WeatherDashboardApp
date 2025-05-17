import { Box, Button, ButtonGroup, Typography } from '@mui/material';
import React from 'react';

interface IPopaup {
    title: string;
    iconRight ?: React.ReactNode;
    iconLeft ?: React.ReactNode;
    btnRight : string;
    btnLeft : string;


}
function Popaup({title,iconRight,iconLeft,btnRight, btnLeft}:IPopaup) {
  return (
    <Box sx={{borderBottom:"1px solid #ccc",paddingY:"10px"}}>
        <Typography sx={{paddingBottom:"7px"}}>{title}</Typography>
      <ButtonGroup variant="outlined" aria-label="Basic button group">
        <Button sx={{width:"min-content"}}>
            {iconLeft}
            {btnLeft}
        </Button>
        <Button sx={{width:"min-content"}}>
            {iconRight}
            {btnRight}
        </Button>
     
      </ButtonGroup>
    </Box>
  )
}

export default Popaup
