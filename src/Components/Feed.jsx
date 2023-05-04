import React, { useEffect } from "react";
import { Stack,Box, Typography } from "@mui/material";
import Sidebar from "./Sidebar"
import { fetchFromApi } from "../utils/fetchFromApi";
import Video from "./Video";


const Feed = () => {
const [selectedCategory, setselectedCategory] = React.useState("New");
const [video, setvideo] = React.useState([]);

// useEffect(()=>{fetchFromApi(`search?part=snippet&q=${selectedCategory}`).then((data)=>setvideo(data.items))},[selectedCategory])

useEffect(() => {
  fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvideo(data.items))
  }, [selectedCategory]);


  return <Stack sx={{flexDirection:{sx:"column" , md:"row"}}}>
    <Box sx={{height:{sx:"auto" , md:"92vh"} , borderRight:"1px solid #3d3d3d" , px:{sx:0, md:2}}}>
    <Sidebar selectedCategory ={selectedCategory} setselectedCategory ={setselectedCategory}/>
    <Typography className="copyright" variant="body2" sx={{mt:1.5 ,color:"#fff"}}>
    Copytight 2023
    </Typography>
    </Box>  

    <Box p={2} sx={{overflowY:"auto" ,height:"90vh" , flex:2}}>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{color:"white"}}>
      {selectedCategory} <span style={{color:"#F31503"}}>Videos</span>
        
      </Typography>
    <Video video ={video}/>
    </Box>
    </Stack>;
};

export default Feed;
