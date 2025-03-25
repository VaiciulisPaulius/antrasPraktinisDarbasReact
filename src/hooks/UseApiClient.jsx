import {useEffect, useState} from 'react'
import axios from "axios";

function UseApiClient(baseURL) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const axiosInstance = axios.create({
        baseURL: baseURL,
        headers: {
            "Content-Type": "application/json"
        }
    })

    useEffect(() => {
        console.log(error)
    }, [error]);

    const request = async (method, url, data = null) => {
        setLoading(true)
        setError(null);

        try {
            const response = await axiosInstance({method, url, data})

            // if (!response.ok) {
            //     throw new Error(`API error: ${response.status} ${response.statusText}`);
            // }

            return response.data
        } catch (err) {
            setError("something went wrong")
            throw new Error(`API error: ${err.response?.status} ${err.response?.statusText || err.message}`);
        } finally {
            setLoading(false)
        }
    }

    return { request, loading, error}
}

export default UseApiClient
