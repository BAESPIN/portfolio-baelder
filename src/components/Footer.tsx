import {FC, ReactNode, useState} from "react";
import {AppBar, Box, Toolbar, IconButton} from '@mui/material';

export const Footer = () => {

    return (
        <AppBar color="primary" sx={{top: 'auto', bottom: '0', zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar disableGutters variant="dense">
            </Toolbar>
        </AppBar>
    );
};