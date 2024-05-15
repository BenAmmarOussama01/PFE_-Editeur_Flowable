import { useState, useEffect } from 'react'
import { MethodHttp, invokeWS } from '../setup/api-service'
import { APP_BASE_URL } from '../config/app.constant'

const useFetchXml = (id: string) => {
  const [xml, setXml] = useState<string | null>(null)
  useEffect(() => {
    const fetch = async () => {
      try {
        const result: any = await invokeWS({
          url: `${APP_BASE_URL}configuration/modeler/rest/converter/convert-to-bpmn/${id}`,
          method: MethodHttp.post,
        })
        setXml(result.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetch()
  }, [])
  return { xml }
}

export default useFetchXml
