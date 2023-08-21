import { IEmailPassword } from '@store/user/user.interface';

export interface ISignInput extends IEmailPassword {
  repeatPassword: string;
}
