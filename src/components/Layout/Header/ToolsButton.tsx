import React from "react";
import {IconButton} from '@mui/material';
import BuildIcon from '@mui/icons-material/Build';

interface ToolsButtonProps {
    toggleTools: () => void;
}

export const ToolsButton = ({ toggleTools }: ToolsButtonProps) => {

    return (
        <IconButton color="inherit" aria-label="open drawer" onClick={toggleTools} sx={{ ml: 2, }}>
            <BuildIcon />
        </IconButton>
    );
};