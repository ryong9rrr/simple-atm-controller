import BankServiceImpl from "../src/domain/BankServiceImpl";
import { Account } from "../src/model";

export default class BankService implements BankServiceImpl {
  validatePinNumber(pinNumber: number) {
    return true;
  }

  getBalance(account: Account) {
    return account.money;
  }
}
