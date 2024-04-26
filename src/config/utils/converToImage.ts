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
