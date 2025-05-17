import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Popaup from "./Popaup";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

function Header() {
  const [value, selectValue] = React.useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    selectValue(event.target.value);
  };
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ background: "#F3FAFE", padding: "5px 0" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src="./src/assets/images/weather-icon.png" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              color: "#3D4852",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            Weather Dashboard
          </Typography>


          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              color: "#3D4852",
              fontSize: "12px",
              textDecoration: "none",
            }}
          >
            Weather Dashboard
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Box sx={{ display:"flex" , gap: 2, width:"20vw"}}>
            <FormControl size="small" variant="outlined" fullWidth focused sx={{outline:"#3D4852"}}>
              <InputLabel sx={{outline:"#3D4852",color:"#3D4852",background:"#FFF",paddingRight:"5px"}} id="select-label">Search Your Location</InputLabel>
              <Select 
              sx={{color:"#3D4852"}}
                labelId="select-label"
                id="select-demo"
                value={value}
                label="Label"
                onChange={handleChange}
              >
                <MenuItem value={10}>San Francisco</MenuItem>
                <MenuItem value={20}>shikago</MenuItem>
                <MenuItem value={30}>berlin</MenuItem>
              </Select>
            </FormControl>

            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ border: "1px solid #ccc", borderRadius: "10px" }}
              >
                <SettingsOutlinedIcon sx={{ color: "#ccc" }} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "baseline",
                }}
                onClick={handleCloseUserMenu}
              >
                <Typography sx={{ textAlign: "left" }}>
                  <Popaup
                    title="Mode"
                    btnLeft="Light"
                    btnRight="Dark"
                    iconLeft={<LightModeOutlined />}
                    iconRight={<DarkModeOutlined />}
                  />
                </Typography>

                <Typography sx={{ textAlign: "left" }}>
                  <Popaup title="Language" btnLeft="Fa" btnRight="En" />
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
