import { useEffect, useState } from "react";

function useApiRequest(apiFunction, ...args) {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        console.log('in the useEffect')
        setIsLoading(true);
        setIsError(false);
        apiFunction(...args)
        .then((response) => {
            console.log(response);
            setData(response.data);
            setIsLoading(false);
        })
        .catch((err) => {
            console.log('api request failed', err)
            setIsError(true);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [...args]);

    return { data, isLoading, isError };
}

export default useApiRequest;