import { Account } from "../model";

export default interface BankServiceImpl {
  validatePinNumber: (pinNumber: number) => boolean;
}
