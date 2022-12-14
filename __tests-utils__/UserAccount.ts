import UserAccountServiceImpl from "../src/domain/UserAccountServiceImpl";
import { Account } from "../src/model";

export default class UserAccount implements UserAccountServiceImpl {
  private pinNumber: number;
  private accounts: Account[] = [];

  constructor(pinNumber: number) {
    this.pinNumber = pinNumber;
  }

  createAccount(id: string, accountNumber: number) {
    const newAccount: Account = { id, accountNumber, money: 0 };
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

  deposit(account: Account, money: number) {
    this.accounts = this.accounts.map((_account) => {
      if (_account.id === account.id) {
        _account.money += money;
      }
      return _account;
    });
  }

  withdraw(account: Account, money: number) {
    const targetAccount = this.getUserAccount(account.id);
    if (!targetAccount) {
      throw new Error("It is not existing Account");
    }
    if (targetAccount.money - money < 0) {
      throw new Error(`you can withdraw ${targetAccount.money}.`);
    }

    this.accounts = this.accounts.map((_account) => {
      if (_account.id === account.id) {
        _account.money -= money;
      }
      return _account;
    });
  }
}
