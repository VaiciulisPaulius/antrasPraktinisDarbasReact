import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {JsonApiProvider} from "./components/JsonApiContext.jsx";
import {AuthProvider} from "./components/AuthContext.jsx";
import {DummyApiProvider} from "./components/DummyApiContext.jsx";
import {BrowserRouter} from "react-router";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <JsonApiProvider>
            <DummyApiProvider>
                <AuthProvider>
                    <StrictMode>
                        <App />
                    </StrictMode>
                </AuthProvider>
            </DummyApiProvider>
        </JsonApiProvider>
    </BrowserRouter>
)
