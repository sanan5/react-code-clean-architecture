import { ISessionVO } from '@interfaces/valueObjects/session';

export default class SessionVO {
  readonly id: string;
  readonly pw: string;

  constructor(param: ISessionVO) {
    this.id = param.id;
    this.pw = param.pw;
  }
}