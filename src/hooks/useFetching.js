import { useState, useEffect } from "react"
import { useQuery } from "react-query";

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState(null)

    const fetching = async () => {
        try {
            setIsLoading(true);
            await callback();
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error]
}

// callback is just a fetch request
export const useFetchingRefactored = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [data, setData] = useState(null)

    const fetching = async () => {
        try {
            setIsLoading(true);
            const recvData = await callback();
            console.log("data", recvData)
            setData(recvData)
        } catch (error) {
            setError(error.message)
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(()=>{
        fetching()
    },[])

    return {isLoading, error, data}
}

// callback is just a fetch request
export const useFetchingQuery = (key, callback) => {
    const {data, isLoading, isError} = useQuery(key, callback)

    return {isLoading, isError, data}
}