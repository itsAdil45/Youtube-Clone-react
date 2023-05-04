import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {fetchFromApi} from "../utils/fetchFromApi"
import Video from "./Video";
import ChannelCard from "./ChannelCard";




const ChannelDetail = () => {
  const[channelDetail , setChannelDetail] = React.useState(null);
  const[video , setVideo] = React.useState([]);
  const {id} = useParams();
  console.log(video);
  useEffect(()=>{fetchFromApi(`channels?part=snippet&id=${id}`).then((data)=>setChannelDetail(data?.items[0]));
                fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then((data)=>setVideo(data?.items));
},[id])

  return <Box minHeight="95vh">
  <Box>
    <div style={{background:'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(169,81,170,1) 67%, rgba(252,70,107,1) 100%)' , 
    zIndex:10, height:"300px"}}/>
    <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
  </Box>

  <Box>
    <Box display="flex" p="2"/>
    <Box sx={{mr:{sm:'100px'}}}/>
    <Video video={video}/>
  </Box>
  </Box>;
};

export default ChannelDetail;
