import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material'
import Navbars from "./Components/Navbar";
import Feed from "./Components/Feed";
import VideoDetail from "./Components/VideoDetail";
import ChannelDetail from "./Components/ChannelDetail";
import SearchFeed from "./Components/SearchFeed";
const App = () => {
    return <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
            <Navbars />
            <Routes>
                <Route path="/" exact element={<Feed />} />
                <Route path="/video/:id" exact element={<VideoDetail />} />
                <Route path="/channel/:id" exact element={<ChannelDetail />} />
                <Route path="/search/:searchTerm" exact element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter >;
};

export default App;
