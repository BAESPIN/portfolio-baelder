import React from "react";
import {IconButton} from '@mui/material';
import SortIcon from '@mui/icons-material/Sort';

interface NavigatorButtonProps {
    toggleNavigator: () => void;
}

export const NavigatorButton = ({ toggleNavigator }: NavigatorButtonProps) => {

    return (
        <IconButton color="inherit" aria-label="open drawer" onClick={toggleNavigator} sx={{ mr: 2, }}>
            <SortIcon />
        </IconButton>
    );
};