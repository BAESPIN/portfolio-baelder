import React from "react";
import {IconButton} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface MenuButtonProps {
    toggleTools: () => void;
}

export const MenuButton = ({ toggleTools }: MenuButtonProps) => {

    return (
        <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={toggleTools} sx={{ mr: 2, }}>
            <MenuIcon />
        </IconButton>
    );
};