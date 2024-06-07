interface Mapper {
  find: string
  replace: string
}

const camundaToFlowableMapper: Mapper[] = [
  { find: 'camunda:formRef', replace: 'flowable:formReference' },
  { find: 'camunda:executionListener', replace: 'flowable:executionListener' },
  {
    find: 'camunda:delegateExpression',
    replace: 'flowable:delegateExpression',
  },
]

export function replaceCamundaToFlowable(input: string): string {
  let output = input
  camundaToFlowableMapper.forEach((mapping) => {
    const regex = new RegExp(mapping.find, 'g')
    output = output.replace(regex, mapping.replace)
  })
  return output
}

export function replaceFlowableToCamunda(input: string): string {
  let output = input
  camundaToFlowableMapper.forEach((mapping) => {
    const regex = new RegExp(mapping.replace, 'g')
    output = output.replace(regex, mapping.find)
  })
  return output
}
