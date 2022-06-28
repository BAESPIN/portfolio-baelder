import React from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {Layout} from './components/Layout';
import {appTheme} from './styles/customTheme'

const theme = appTheme();

function App() {

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                    <Layout></Layout>
            </ThemeProvider>
        </div>
    );
}

export default App;
