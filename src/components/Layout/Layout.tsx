import {useState} from 'react';
import React from 'react';
import {styled} from '@mui/material';

import {Header} from './Header/Header';
import {Main} from './Main/Main';
import {Tools} from './Tools/Tools';
import {Navigator} from './Navigator/Navigator';

const ContentWrapper = styled('div')`
  display: flex;
  flex-direction: column;
`;


export const Layout = () => {
    const [openNavigator, setOpenNavigator] = useState(false);
    const toggleNavigator = () => setOpenNavigator((status) => !status);
    const [openTools, setOpenTools] = useState(false);
    const toggleTools = () => setOpenTools((status) => !status);

    return (
        <ContentWrapper>
            <Header toggleNavigator={toggleNavigator} toggleTools={toggleTools}/>
            <Navigator open={openNavigator} handleClose={toggleNavigator}/>
            <Main/>
            <Tools open={openTools} handleClose={toggleTools} />
        </ContentWrapper>
    );
};