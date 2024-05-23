import React from 'react';
import ReactDOM from 'react-dom/client';
import { SnackbarProvider } from 'notistack'; 
import MadeRouter from './components/MadeUpRouter/MadeRouter';
import RouterPaths from './RouterPaths'; 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode> 
            <SnackbarProvider
                maxSnack={3}
				autoHideDuration = {2000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }} 
            >
                <MadeRouter routes={RouterPaths} />
            </SnackbarProvider> 
    </React.StrictMode>
);
