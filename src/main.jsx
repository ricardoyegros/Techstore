import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { Auth0Provider } from "@auth0/auth0-react";
import { auth0Config } from '../auth0.config';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Auth0Provider {...auth0Config}>
        <GoogleOAuthProvider clientId="1038543899058-oc378rj1bnah2at21irp8ku3tbsvqvvj.apps.googleusercontent.com">
        <App />
        </GoogleOAuthProvider>
    </Auth0Provider>
)
