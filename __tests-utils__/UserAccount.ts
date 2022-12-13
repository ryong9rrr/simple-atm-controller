import UserAccountServiceImpl from "../src/domain/UserAccountServiceImpl";
import { Account } from "../src/model";

export default class UserAccount implements UserAccountServiceImpl {
  private pinNumber: number;
  private accounts: Account[] = [];

  constructor(pinNumber: number) {
    this.pinNumber = pinNumber;
  }

  createAccount(id: string, accountNumber: number) {
    const newAccount: Account = { id, accountNumber };
    this.accounts.push(newAccount);
  }

  getPinNumber() {
    return this.pinNumber;
  }

  getUserAccounts() {
    return this.accounts;
  }

  getUserAccount(accountId: string) {
    return this.accounts.find(({ id }) => id === accountId) || null;
  }
}
