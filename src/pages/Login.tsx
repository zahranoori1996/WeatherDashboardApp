import { Box } from "@mui/system";
import Form from "../components/Form";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  type SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

function Login() {
  const [language, setLanguage] = useState<string>("en");

  const handleLanguageChange = (event: SelectChangeEvent<string>) => {
    setLanguage(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop:"3%",
      }}
    >
      <Box
        sx={{
          boxShadow: "0 2px 7px 0px gray",
          borderRadius: "15px",
          width: "60%",
        }}
      >
        <Form />
      </Box>
      <FormControl sx={{ marginTop: 4,marginBottom: 8, minWidth: 150 ,}} size="small" variant="standard">
        <InputLabel>Language</InputLabel>
        <Select
          value={language}
          label="Language"
          onChange={handleLanguageChange}
          sx={{fontSize:"12px"}}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fa">Persian</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default Login;
