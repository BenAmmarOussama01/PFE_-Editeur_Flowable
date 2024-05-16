export enum ModelType {
  process = 0,
  form = 2,
  decisionTable = 4,
  case = 5,
  decisionService = 6,
  app=3,
}

export const modalNameByModelType = (modelType: number) => {
  switch (modelType) {
    case 0:
      return 'process'
    case 2:
      return 'form'
    case 4:
      return 'decision table'
    case 5:
      return 'case'
    case 6:
      return 'decision service'
      case 3:
        return 'app'
    default:
      return ''
  }
}

export const modalDescriptionByModelType = (modelType: number) => {
  switch (modelType) {
    case 0:
      return 'Business process Models'
    case 2:
      return 'Forms'
    case 3:
      return 'App definitions'
    case 4:
      return 'Decisions'
    case 5:
      return 'case'
    case 6:
      return 'Decisions'
    default:
      return ''
  }
}
