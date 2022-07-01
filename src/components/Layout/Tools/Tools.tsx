import React from "react";
import {Box} from '@mui/material';
import Drawer from "@mui/material/Drawer";

import {ToolList} from './ToolList';

import {DRAWER_WIDTH} from '../../../utils/constants';

interface ToolsProps {
    open: boolean | undefined;
    handleClose: () => void;
}

export const Tools = ({ open, handleClose }: ToolsProps) => {

    return (
        <Box component="nav">
            <Drawer sx={{width: DRAWER_WIDTH, flexShrink: 0, '& .MuiDrawer-paper': {width: DRAWER_WIDTH, boxSizing: 'border-box',},}}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    onClose={handleClose}>
                <ToolList/>
            </Drawer>
        </Box>
    );
};