import { useState, useEffect } from 'react'
import { MethodHttp, invokeWS } from '../setup/api-service'
import { APP_BASE_URL } from '../config/app.constant'

interface IDetails {
  id: string
  key: string
  name: string
  description: string
  version: number
  lastUpdated: number
  lastUpdatedBy: string
  formDefinition: string
}

const useFetchForm = (id: string) => {
  const [formDetails, setFormDetails] = useState<IDetails | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    const fetch = async () => {
      try {
        const result: any = await invokeWS({
          url: `${APP_BASE_URL}configuration/modeler/rest/form-models/${id}`,
          method: MethodHttp.get,
        })
        setFormDetails(result.data)
      } catch (error) {
        console.log(error)
      }
    }

    fetch()
  }, [])
  return { formDetails }
}

export default useFetchForm
