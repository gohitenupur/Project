import React from 'react'
import {
    LightModeOutlined, DarkModeOutlined, Menu as MenuIcon,
    Search, SettingsOutlined, ArrowDropDownOutlined
} from "@mui/icons-material"

import FlexBetween from "./FlexBetween";
import { useDispatch } from 'react-redux';
import { setMode } from "../state";
import profileImage from "../assets/person1.jfif"
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material';


function Navbar() {
    const dispatch = useDispatch();
    const theme = useTheme();
    return (
        <AppBar sx={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}>
            <Toolbar sx={{
                justifyContent: "space-between",
            }}>
                {/* Left side  */}
                <FlexBetween>
                    <IconButton onClick={() => console.log("open/close sidebar")}>
                        <MenuIcon />
                    </IconButton>
               
                <FlexBetween 
                backgroundColor={theme.palette.background.alt}
                borderRadius="9px"
                gap="3rem"
                p="0.1rem 1.5rem"
                >
                <InputBase placeholder='Search....'>
                    <IconButton>
                        <Search />
                    </IconButton>
                </InputBase>
                </FlexBetween>
                </FlexBetween>

            </Toolbar>

        </AppBar>
    )
}

export default Navbar