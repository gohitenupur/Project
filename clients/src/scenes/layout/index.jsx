import React ,{useState}from 'react'
import {Box,useMeidiaQuery} from "@mui/material";
import {outlet} from "react-router-dom";
import {useSelector} from "react-redux";
import Navbar from "../../components/Navbar"
import Outlet from "../../components/Outlet"


function Layout() {
  return (
    <Box width="100%" height="100%">
      <Box>
        <Navbar />
        <Outlet/>
      </Box>
    </Box>
  )
}

export default Layout
