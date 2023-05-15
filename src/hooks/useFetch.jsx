import {useEffect, useState} from 'react'

import {fetchDataFromAPI} from '../utils/api.js'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        setLoading('loading...')
        setData(null)
        setError(null)

        const getResponse = async() => {
            const response = await fetchDataFromAPI(url)
            setLoading(false)
            setData(response)
        }
        getResponse()
    }, [url])
    return {data, loading, error}
}

export default useFetch