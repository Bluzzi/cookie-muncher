export function capitalizeFirstLetter(content: string): string {
  return `${content.charAt(0).toUpperCase()}${content.slice(1)}`;
}

export function getByteSize(content: string): number {
  const encoder = new TextEncoder();

  return encoder.encode(content).byteLength;
}