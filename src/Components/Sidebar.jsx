import React from "react";
import { Button, Stack } from "@mui/material";
import { categories } from "../utils/constants";

const Sidebar = ({selectedCategory, setselectedCategory}) => {
  
  return <Stack sx={{overflowY:"auto" , flexDirection:{md :"column"},
  height:{sx:"auto", md:"95%"}, fontSize:"2px"
  }}>
        {categories.map((categories)=> (
            <Button onClick={()=>{setselectedCategory(categories.name)}}
            key={categories.name} className="category-btn" style ={{background:selectedCategory===categories.name && "#FC1503",color:"white" , borderRadius:20, marginTop:10}}>
        <span style ={{color:selectedCategory===categories.name? "white":"red",marginRight:"15px" }}>{categories.icon}</span>
        <span style ={{opacity:selectedCategory===categories.name? "1":"0.8" , fontSize:"12px"}}>{categories.name}</span>
            </Button>
        ))}
        </Stack>;
};

export default Sidebar;
