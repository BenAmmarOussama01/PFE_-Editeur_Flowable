import { useState, useEffect } from 'react'
import { MethodHttp, invokeWS } from '../setup/api-service'
import { APP_BASE_URL } from '../config/app.constant'

const useFetchAppDetails = (id: string) => {
  const [details, setDetails] = useState<any | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      try {
        const result: any = await invokeWS({
          url: `${APP_BASE_URL}configuration/modeler/rest/app-definitions/${id}`,
          method: MethodHttp.get,
        })
        setDetails(result.data)
        setIsLoading(false)
        console.log('use fetch app detail', details)
      } catch (error) {
        setIsLoading(false)
        throw error
      }
    }
    console.log('fetching')
    fetch()
  }, [])
  return { isLoading, details }
}
export default useFetchAppDetails
