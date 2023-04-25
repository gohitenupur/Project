import React ,{useState}from 'react'
import {Box, useMediaQuery} from "@mui/material";
import {outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "../../components/Navbar"
import Outlet from "../../components/Outlet"
import Sidebar from '../../components/Sidebar';


function Layout() {
  const isNonMobile =  useMediaQuery("(min-width:600px)"); // mobile
  const [isSideBarOpen, setIsSideBarOpen] =useState(true);

  return (
    <Box display={isNonMobile?"flex" :"block"} width="100%" height="100%">
      <Sidebar isNonMobile={isNonMobile}
        drawerWidth="250px"
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <Box>
        <Navbar 
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
        />
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout
