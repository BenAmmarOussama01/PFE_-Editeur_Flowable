import { useState, useEffect } from 'react'
import { MethodHttp, invokeWS } from '../setup/api-service'
import { APP_BASE_URL } from '../config/app.constant'

const useFetchProcessDetails = (id: string) => {
  const [details, setDetails] = useState<any | null>(null)
  useEffect(() => {
    const fetch = async () => {
      try {
        const result: any = await invokeWS({
          url: `${APP_BASE_URL}configuration/modeler/rest/models/${id}`,
          method: MethodHttp.get,
        })
        setDetails(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log('fetching')
    fetch()
  }, [])
  return { details, setDetails }
}

export default useFetchProcessDetails
