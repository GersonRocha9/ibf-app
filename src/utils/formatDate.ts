export function formatDate(date: string) {
  const dateArray = date.split('T')
  const datePart = dateArray[0].split('-')
  const timePart = dateArray[1].split(':')

  const day = datePart[2]
  const month = datePart[1]
  const year = datePart[0]

  const hour = timePart[0]
  const minute = timePart[1]

  const dateObject = new Date(date)
  const timezoneOffset = dateObject.getTimezoneOffset() / 60

  return `${day}/${month}/${year} às ${Number(hour) - timezoneOffset}:${minute}`
}
