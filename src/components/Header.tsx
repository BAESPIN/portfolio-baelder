import {FC, ReactNode, useState} from "react";
import {AppBar, Box, IconButton, Toolbar} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import Typography from "@mui/material/Typography";

import {TITLE} from '../utils/constants';


export const Header = () => {

    return (
        <AppBar color="primary" sx={{top: '0', bottom: 'auto', zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar>
                <Typography>
                    {TITLE}
                </Typography>
                <Box sx={{flexGrow: 1}}/>
                <IconButton color="inherit">
                    <SearchIcon/>
                </IconButton>
                <IconButton color="inherit">
                    <MoreIcon/>
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};