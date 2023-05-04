import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";
import Video from "./Video";


const SearchFeed = () => {

const [video, setvideo] = React.useState([]);
const {searchTerm}  = useParams();
useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvideo(data.items))
  }, [searchTerm]);


  return <Box p={2} sx={{overflowY:"auto" ,height:"90vh" , flex:2}}>
  <Typography variant="h5" fontWeight="bold" mb={2} sx={{color:"white"}}>
  Search Results for: <span style={{color:"#F31503"}}>{searchTerm}</span> Videos
  </Typography>
<Video video ={video}/>
</Box>
};

export default SearchFeed;
