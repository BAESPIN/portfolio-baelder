import React from "react";
import {AppBar, Box, Grid, Toolbar} from '@mui/material';
import Typography from "@mui/material/Typography";

import {ToolsButton} from "./ToolsButton";
import {NavigatorButton} from "./NavigatorButton";

import {TITLE} from '../../../utils/constants';

interface HeaderProps {
    toggleTools: () => void;
    toggleNavigator: () => void;
}

export const Header = ({ toggleTools, toggleNavigator }: HeaderProps) => {

    return (
        <Box component="header" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <AppBar position="static">
                <Toolbar disableGutters={true} variant={"dense"}>

                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid>
                            <NavigatorButton toggleNavigator={toggleNavigator}/>
                        </Grid>
                        <Grid xs={3}>
                            <Typography variant="h5" noWrap align={"center"}>
                                {TITLE}
                            </Typography>
                        </Grid>
                        <Grid>
                            <ToolsButton toggleTools={toggleTools}/>
                        </Grid>
                    </Grid>

                </Toolbar>
            </AppBar>
        </Box>
    );
};