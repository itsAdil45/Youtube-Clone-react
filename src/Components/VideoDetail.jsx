
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { Box, Stack, Typography } from "@mui/material";
import {Link, useParams} from "react-router-dom";
import {CheckCircle} from "@mui/icons-material"
import { fetchFromApi } from "../utils/fetchFromApi";
import Video from "./Video";

const VideoDetail = () => {
  const[videoDetail, setVideoDetail]= React.useState(null);
  const[video, setVideo]= React.useState(null);
  const {id} = useParams();
  useEffect(()=>{
  fetchFromApi(`videos?part=snippet, statistics&id=${id}`).then((data)=>setVideoDetail(data.items[0]));
  fetchFromApi(`search?part=snippet&relatedToVideoId=${id}&type=video`).then((data)=>setVideo(data.items));
}, [id])
  if(!videoDetail?.snippet) return "loading...";
  const {snippet:{title, channelId, channelTitle} , statistics:{viewCount, likeCount}}= videoDetail;
  return <Box minHeight="95vh">
          <Stack direction={{xs:"col", md:"row"}}>
      <Box flex={1}>
         <Box sx={{width:'100%', position:"sticky", top:"86px"}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls/>
        <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
          {title}
        </Typography>
        <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} py={1} px={2}>
        <Link to={`/channel/${channelId}`}>
        <Typography variant={{sm:"subtitle1", md:"h6"}} color="#fff">
          {channelTitle}
          <CheckCircle sx={{fontSize:12 , color:"grey", ml:"5px"}}/>
        </Typography>
        </Link>
        <Stack direction="row" alignItems="center" gap="20px">
          <Typography variant="body1" sx={{opacity:0.6}}>
          {parseInt(viewCount).toLocaleString()} Views
          </Typography>
          <Typography variant="body1" sx={{opacity:0.6}}>
          {parseInt(likeCount).toLocaleString()} likes
          </Typography>
        </Stack>
        </Stack>
        </Box>
      </Box>
         <Box px={2} py={{md:1 , sm:5}} justifyContent="center" alignItems="center">
        <Video video={video} direction="column"/>
         </Box>
         </Stack>

    </Box>;
};

export default VideoDetail;
