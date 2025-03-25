import React, {createContext, useContext, useState} from 'react'
import { JSON_API_ROUTES } from "/src/utils/apiRoutes/JsonApiRoutes";
import UseApiClient from "/src/hooks/UseApiClient.jsx";

const JsonApiContext = createContext(null)

export function JsonApiProvider({children}) {
    const { request, loading, error } = UseApiClient(JSON_API_ROUTES.BASE_URL)
    const paths = JSON_API_ROUTES

    return (
        <JsonApiContext.Provider value={{loading, error, request, paths}}>
            {children}
        </JsonApiContext.Provider>
    )
}

export const useJsonApi = () => useContext(JsonApiContext);
