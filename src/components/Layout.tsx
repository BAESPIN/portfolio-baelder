import {FC, ReactNode, useState} from 'react';
import React from 'react';
import {styled, Box, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';

import {Header} from './Header';
import {Main} from './Main';
import {Navigation} from './Navigation';
import {Footer} from './Footer';

import {FOOTER_HEIGHT} from '../utils/constants';
import {DRAWER_WIDTH} from '../utils/constants';

const ContentWrapper = styled('div')`
  display: flex;
`;

const DrawerHeader = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 1), ...theme.mixins.toolbar,
}));


export const Layout = () => {

    return (
        <ContentWrapper>
            <Box component="header">
                <Header/>
            </Box>

            <Box component="main" >
                <Main/>
            </Box>

            <Box component="nav" >
                <Navigation/>
            </Box>

            <Box component="footer">
                <Footer />
            </Box>
        </ContentWrapper>
    );
};

// <React.Fragment>
//     <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
//         <Grid item xs={8}>
//             <Box component="header">
//                 <Header/>
//             </Box>
//         </Grid>
//         <Grid item xs={4}>
//             <Box component="main" sx={{flexGrow: 1, p: 3}}>
//                 {/*<DrawerHeader/>*/}
//                 {/*{children}*/}
//             </Box>
//         </Grid>
//         <Grid item xs={4}>
//             <Box component="sidebar" sx={{flexGrow: 1, p: 3}}>
//                 {/*<DrawerHeader/>*/}
//                 {/*{children}*/}
//             </Box>
//         </Grid>
//         <Grid item xs={8}>
//             <Box component="footer">
//                 <Footer />
//             </Box>
//         </Grid>
//     </Grid>
//
//
//
//     {/*<Navigation open={open} handleClose={toggleNavigation} />*/}
//
//
//
// </React.Fragment>
// );