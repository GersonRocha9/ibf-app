export function limitText(text: string, limit = 30) {
  return text.length > limit ? text.substring(0, limit) + '...' : text
}
