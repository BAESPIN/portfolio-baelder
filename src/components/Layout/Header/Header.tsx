import React from "react";
import {AppBar, Box, Toolbar} from '@mui/material';
import Typography from "@mui/material/Typography";

import {MenuButton} from "./MenuButton";

import {TITLE} from '../../../utils/constants';

interface HeaderProps {
    toggleTools: () => void;
}

export const Header = ({ toggleTools }: HeaderProps) => {

    return (
        <Box component="header">
            <AppBar position="fixed">
                <Toolbar variant={"dense"}>
                    <MenuButton toggleTools={toggleTools}/>
                    <Typography variant="h6" noWrap component="div">
                        {TITLE}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};