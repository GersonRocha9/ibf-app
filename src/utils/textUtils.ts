function limitCharacters(text: string, limit = 30): string {
  return text.length > limit ? text.substring(0, limit) + "..." : text;
}

export const textUtils = {
  limitCharacters,
};
