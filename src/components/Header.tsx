import {FC, ReactNode, useState} from "react";
import {AppBar, Box, Toolbar} from '@mui/material';


export const Header = () => {

    return (
        <AppBar position="fixed" sx={{zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar disableGutters variant="dense">
            </Toolbar>
        </AppBar>
    );
};