import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {JsonApiProvider} from "./contexts/JsonApiContext.jsx";
import {AuthProvider} from "./contexts/AuthContext.jsx";
import {DummyApiProvider} from "./contexts/DummyApiContext.jsx";
import {BrowserRouter} from "react-router";
import {StatusProvider} from "./contexts/StatusProvider.jsx";
import ProfileProvider from "./contexts/ProfileContext.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <StatusProvider>
            <JsonApiProvider>
                <DummyApiProvider>
                    <AuthProvider>
                        <ProfileProvider>
                            <StrictMode>
                                <App />
                            </StrictMode>
                        </ProfileProvider>
                    </AuthProvider>
                </DummyApiProvider>
            </JsonApiProvider>
        </StatusProvider>
    </BrowserRouter>
)
