export function capitalizeFirstLetter(content: string): string {
  return `${content.charAt(0).toUpperCase()}${content.slice(1)}`;
}