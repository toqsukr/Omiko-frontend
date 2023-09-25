export const trimString = (value: string, length: number) =>
  value.length > length ? `${value.slice(0, length - 1)}...` : value;

export const isAtContainer = (container: any[], id: number | string) =>
  container.reduce((accumulator, element) => accumulator || ('id' in element && element.id === id), false);
