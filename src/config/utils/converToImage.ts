import { APP_BASE_URL } from '../app.constant'
import BpmnModdle from 'bpmn-moddle'

export const fetchThumbnailImage = (id: string): Promise<string> => {
  return fetch(
    `${APP_BASE_URL}configuration/modeler/rest/models/${id}/thumbnail`,
  )
    .then((response) => response.blob())
    .then((blob) => {
      const imageUrl = URL.createObjectURL(blob)
      return imageUrl
    })
}

export const fetchXml = async () => {
  console.log('hello')
  try {
    const response = await fetch(
      `${APP_BASE_URL}/configuration/modeler/rest/models/b6d600ac-02e1-11ef-9260-aa339618fe51/bpmn20`,
    )
    const blob = await response.blob()
    const text = await blob.text()
    console.log('Blob content:', text)
  } catch (error) {
    console.error('Error fetching XML:', error)
  }
}
