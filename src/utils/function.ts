export const trimString = (value: string, length: number) =>
  value.length > length ? `${value.slice(0, length - 1)}...` : value;
