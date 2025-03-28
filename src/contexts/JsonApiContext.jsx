import React, {createContext, useContext, useState} from 'react'
import { JSON_API_ROUTES } from "/src/utils/apiRoutes/JsonApiRoutes";
import UseApiClient from "/src/hooks/UseApiClient.jsx";

const JsonApiContext = createContext(null)

export function JsonApiProvider({children}) {
    const { request } = UseApiClient(JSON_API_ROUTES.BASE_URL)

    return (
        <JsonApiContext.Provider value={{request}}>
            {children}
        </JsonApiContext.Provider>
    )
}

export const useJsonApi = () => useContext(JsonApiContext);
