import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const apiKey = process.env.REACT_APP_API_KEY;
        const res = await fetch(url, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        })
        const json = await res.json();

        setData(json)
        setLoading(false)

      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { isLoading, error, data }
}

export default useFetch