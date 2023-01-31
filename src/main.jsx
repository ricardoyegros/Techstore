import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.createRoot(document.getElementById('root')).render(
        <GoogleOAuthProvider clientId="1038543899058-oc378rj1bnah2at21irp8ku3tbsvqvvj.apps.googleusercontent.com">
        <App />
        </GoogleOAuthProvider>
)
