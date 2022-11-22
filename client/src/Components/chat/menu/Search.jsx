import { Box, InputBase } from "@mui/material";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
const Search = ({setInputs}) => {
  return (
    <Box display={"flex"} alignItems='center' sx={{background:"#fff",height:"45px",borderBottom:"1px solid #F2F2F2"}}>
      <Box sx={{background:"#f0f2f5",position:"relative",margin:"0 13px",width:"100%",borderRadius:"10px"}}>
        <Box sx={{position:"absolute",height:"100%",padding:"6px 10px",color:"#919191"}}>
            <SearchIcon fontSize="small"/>
        </Box>
        <InputBase onChange={(e) =>setInputs(e.target.value)} placeholder="Search or start new chat" sx={{width:"100%",padding:"16px",height:"15px",paddingLeft:"65px",fontSize:"14px"}}/>
      </Box>
    </Box>
  );
};

export default Search;
