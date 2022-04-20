import { useState, useEffect } from 'react';

function useFetch(URL) {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [err, setErr] = useState(null)

    //   useEffect(() => {
    //       fetch('http://localhost:8000/blog')
    //       .then(res => {
    //             return res.json()
    //       })
    //       .then(data => {
    //             setBlog(data)
    //       })
    //   }, [])

    useEffect(() => {
        const abortCont = new AbortController()

        setTimeout(() => {
            const loadData = async () => {
                try{
                    const response = await fetch(URL, {signal: abortCont.signal})
                    if (!response.ok){
                        throw Error ('Could not load data')
                    }
                    const datafetch = await response.json()
                    setData(datafetch)
                    setIsPending(false)
                    setErr(null)
                } catch(e){
                    if (e.name === 'AbortError'){
                        console.log("fetch aborted")
                    } else {
                        setErr(e.message)
                        setIsPending(false)
                    }
                }
            }
            loadData()
        }, 1000)

        return () => abortCont.abort()
    }, [URL])

    return { data, isPending, err }
}

export default useFetch