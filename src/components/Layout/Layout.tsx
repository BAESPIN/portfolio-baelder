import {useState} from 'react';
import React from 'react';
import {styled} from '@mui/material';

import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Tools} from './Tools/Tools';

const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;


export const Layout = () => {
    const [open, setOpen] = useState(false);
    const toggleTools = () => setOpen((status) => !status);

    return (
        <ContentWrapper>
            <Header toggleTools={toggleTools} />
            <Tools open={open} handleClose={toggleTools} />
            <Main/>
        </ContentWrapper>
    );
};