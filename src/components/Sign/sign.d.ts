export interface ISign {
  sign: boolean;
  setSign: (value: boolean) => void;
}

export enum SignMode {
  Register,
  Enter,
}
