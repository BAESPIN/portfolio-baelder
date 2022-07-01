import React from "react";
import {Box} from '@mui/material';
import Drawer from "@mui/material/Drawer";

import {NAVIGATOR_WIDTH} from '../../../utils/constants';

interface NavigatorProps {
    open: boolean | undefined;
    handleClose: () => void;
}

export const Navigator = ({ open, handleClose }: NavigatorProps) => {

    return (
        <Box component="nav">
            <Drawer sx={{width: NAVIGATOR_WIDTH, flexShrink: 0, '& .MuiDrawer-paper': {width: NAVIGATOR_WIDTH, boxSizing: 'border-box'} }}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    onClose={handleClose}>
            </Drawer>
        </Box>
    );
};