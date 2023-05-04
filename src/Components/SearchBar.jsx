import { IconButton, Paper } from "@mui/material";
import React from "react";
import {Search}  from "@mui/icons-material"
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const[searchTerm, setSearchTerm] = React.useState("");
  const navigate = useNavigate();
  const handle = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }
  return  <Paper 
  sx={{mr:{sm:5}}} style={{borderRadius:"20px", 
  padding:5 , boxShadow:"none", 
  border:"1px solid #e3e3e3"}} component="form"  
  onSubmit={handle}
  >
    <input  className="search-bar" placeholder="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
    <IconButton type="submit" style={{color:"red", padding:'5px'}} >
        <Search />
    </IconButton>
 
     </Paper>
};

export default SearchBar;
