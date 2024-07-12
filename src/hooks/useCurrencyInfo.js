import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({rates: {} });
    const [error, setError] = useState(null)

    useEffect (() => {
        fetch(`https://api.exchangerate-api.com/v4/latest/${currency}`)
        .then((res) => {
            if(!res.ok){
                throw new Error('Network response was not ok')
            } return res.json();
        })
        .then((res) => {
            setData(res);
        })
        .catch((error) => {
            setError(error.message)
        })
    }, [currency])


    if (error) {
        console.log("Error fetching currency data:", error)
    }

    return data.rates || {};
}

export default useCurrencyInfo;