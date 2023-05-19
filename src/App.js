import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import BasicTable from "./table";
import { AlignHorizontalCenter } from "@mui/icons-material";

const api =
  "https://script.google.com/macros/s/AKfycbyQEzTRXUrn5Fuz1IjvJA8TSbUwkYLBfUw9thLM4mWy8lqkvXit8tim4m53dQ-AwtuZ/exec";


function App() {
  const [data, setData] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleButtonClick = async () => {
    setMessage("検索中...");
    try {
      const response = await axios.get(api +"?name="+ name);
      console.log(response.data);
      setData(response.data);
      setMessage("");
    } catch (error) {
      console.error(error);
    }
  };
  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      handleButtonClick();
    }
  };
  return (
    <div>
      <h1 className="center-text">Twitter Spoofing Checker</h1>
      <p className="center-text">流行りのなりすましが存在するかをチェックします．</p>
      <div style={{ display: "flex", justifyContent: "center", margin:'50px'}}>
      <Box sx={{ width: '400px', display: 'flex',justifyContent: "center"}}>
        <p style={{fontSize: 'large'}}>@&nbsp;</p>
        <TextField
          label="Enter Your Username"
          variant="outlined"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          onKeyDown={handleKeyDown}
          fullWidth
        />
        </Box>
        <IconButton
          color="primary"
          aria-label="search"
          onClick={handleButtonClick}
        >
          <SearchIcon />
        </IconButton>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        
      <p>{message}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center", margin: 'auto', maxWidth:"600px"}}>
        {data ? <BasicTable obj={data} /> : <React.Fragment></React.Fragment>}
      </div>
      
      <p className="center-text">仕様上，凍結されていてもなりすましアカウントと表示される場合があります．</p>
      <footer style={{ display: "flex", justifyContent: "center", margin: 'auto',marginTop:'100px', maxWidth:"500px"}}>
        <p><a href="https://twitter.com/hirobon1690">@hirobon1690</a></p>
      </footer>
    </div>
  );
}

export default App;
