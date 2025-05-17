import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalPostOfficeOutlinedIcon from '@mui/icons-material/LocalPostOfficeOutlined';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";


function Footer() {
  return (
    <Box
      sx={{
        display:"flex",
        justifyContent:"space-between",
        // overflowX:"hidden",
        background:
          "linear-gradient(335deg,rgba(243, 250, 254, 1) 19%, rgba(204, 221, 221, 1) 50%, rgba(243, 250, 254, 1) 100%);",
        // width: "100%",
        marginTop:3,
        padding: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center",gap:1 }}>
        <img src="./src/assets/images/icon-nadinsoft.png" />
        <Typography color="#003464" sx={{fontSize:"11px"}}>
          All rights of this site are reserved for Nadin Sadr Aria Engineering
          Company.
        </Typography>
      </Box>
      <Box sx={{display:"flex",paddingRight:6 ,gap:8}}>
        <Box sx={{ display: "flex", alignItems: "center",gap:1 }}>
            <LocalPostOfficeOutlinedIcon sx={{color:'#003464'}}/>
            <Typography color="#003464" sx={{fontSize:"11px"}}>contact us : info@nadin.ir</Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center",gap:1 }}>
            <CalendarMonthOutlinedIcon sx={{color:'#003464'}}/>
            <Typography color="#003464" sx={{fontSize:"11px"}}>12:25 . Monday 23 December 2023</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
