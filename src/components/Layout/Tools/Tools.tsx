import React from "react";
import {Box} from '@mui/material';
import Drawer from "@mui/material/Drawer";

import {ToolList} from './ToolList';

import {TOOLS_WIDTH} from '../../../utils/constants';

interface ToolsProps {
    open: boolean | undefined;
    handleClose: () => void;
}

export const Tools = ({ open, handleClose }: ToolsProps) => {

    return (
        <Box component="nav" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Drawer sx={{width: TOOLS_WIDTH, flexShrink: 0, '& .MuiDrawer-paper': {width: TOOLS_WIDTH, boxSizing: 'border-box',}}}
                    variant="persistent"
                    anchor="right"
                    open={open}
                    onClose={handleClose}>
                <ToolList/>
            </Drawer>
        </Box>
    );
};