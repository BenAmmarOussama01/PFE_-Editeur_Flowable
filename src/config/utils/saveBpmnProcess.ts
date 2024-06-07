import axios from 'axios'
import { APP_BASE_URL } from '../app.constant'

const axiosInstance = axios.create({
  baseURL: APP_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
})

const convertToJson = async (value: string) => {
  try {
    const res = await fetch(
      `${APP_BASE_URL}configuration/modeler/rest/converter/convert-to-json`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ value }),
      },
    )
    const response = await res.json()
    delete response.resourceId
    return response
  } catch (err) {
    console.log('Conversion Error:', err)
    throw err // Re-throw the error to be handled by the caller
  }
}

export const saveBpmnProcess = async (
  id: string,
  value: string,
  lastUpdated: number,
  name: string,
  key: string,
  description: string,
) => {
  const formData = new URLSearchParams()
  try {
    const response = await convertToJson(value)

    formData.append('modeltype', 'model')
    formData.append('json_xml', JSON.stringify({ modelId: id, ...response }))
    formData.append('name', name)
    formData.append('key', key)
    formData.append('description', description)
    formData.append('newversion', 'false')
    formData.append('comment', '')

    formData.append('lastUpdated', lastUpdated.toString())

    const res = await axiosInstance.post(
      `/configuration/modeler/rest/models/${id}/editor/json`,
      formData,
    )
    console.log('Success saveBpmn:', res.data)
    return res
  } catch (err) {
    console.log('test:', err)
    throw err
  }
}
