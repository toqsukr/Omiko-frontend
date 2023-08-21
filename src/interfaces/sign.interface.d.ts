import { IUsernamePassword } from '@store/user/user.interface';

export interface ISignInput extends IUsernamePassword {
  repeatPassword: string;
}
