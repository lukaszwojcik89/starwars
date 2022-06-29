import {useEffect, useState} from "@types/react";
import dummyData from "../../dummy-data";

const useFetch = (url, formatData) => {
    const [response, setResponse] = useState(dummyData);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const doRequest = async () => {
        console.log('Fetching');

        setLoading(true);
        setError(null);
        setResponse(null);

        const response = await fetch(url);
        const data = await response.json();
        setResponse(formatData(data))

        data.catch((error) => {
            setError(error)
        })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        doRequest().catch(() => {})
    }, [url, formatData])

    return [response, loading, error]
}

export default useFetch