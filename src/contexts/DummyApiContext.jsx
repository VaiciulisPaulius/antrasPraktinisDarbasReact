import React, {createContext, useContext} from 'react'
import { DUMMY_API_ROUTES } from "/src/utils/apiRoutes/DummyApiRoutes.js";
import UseApiClient from "/src/hooks/UseApiClient.jsx";

const DummyApiContext = createContext(null)

export function DummyApiProvider({children}) {
    const { request } = UseApiClient(DUMMY_API_ROUTES.BASE_URL)
    const paths = DUMMY_API_ROUTES

    return (
        <DummyApiContext.Provider value={{request}}>
            {children}
        </DummyApiContext.Provider>
    )
}

export const useDummyApi = () => useContext(DummyApiContext);
