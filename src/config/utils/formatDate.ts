import dayjs from 'dayjs'

export const formatDate = (milliseconds: number): string => {
  const date = dayjs(milliseconds)
  const today = dayjs()
  const yesterday = today.subtract(1, 'day')

  if (date.isSame(today, 'day')) {
    return `Today at ${date.format('HH:mm:ss')}`
  } else if (date.isSame(yesterday, 'day')) {
    return `Yesterday at ${date.format('HH:mm:ss')}`
  } else {
    return date.format('MM-DD-YYYY')
  }
}
