import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MovieProvider from './Context/Movie.context';
import LoadingProvider from './Context/Loading.context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <MovieProvider>
            <LoadingProvider>
                <App / >
            </LoadingProvider>
        </MovieProvider>
    </BrowserRouter>
);

