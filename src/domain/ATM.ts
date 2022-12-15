import { Account } from "../model";
import BankServiceImpl from "./BankServiceImpl";
import CashLockerServiceImpl from "./CashLockerServiceImpl";
import UserAccountServiceImpl from "./UserAccountServiceImpl";

interface ConstructorProps {
  bankService: BankServiceImpl;
  cashLockerService: CashLockerServiceImpl;
}

export default class ATM {
  private bankService: BankServiceImpl;
  private cashLockerService: CashLockerServiceImpl;
  private userAccount: UserAccountServiceImpl | null = null;
  private selectedAccount: Account | null = null;

  constructor({ bankService, cashLockerService }: ConstructorProps) {
    this.bankService = bankService;
    this.cashLockerService = cashLockerService;
  }

  private setUserAccount(userAccount: UserAccountServiceImpl | null) {
    this.userAccount = userAccount;
  }

  private setSelectedAccount(account: Account | null) {
    this.selectedAccount = account;
  }

  endWork() {
    this.setUserAccount(null);
    this.setSelectedAccount(null);
  }

  getCurrentUserAccount() {
    return this.userAccount;
  }

  getCurrentSelectedAccount() {
    return this.selectedAccount;
  }

  insert(userAccount: UserAccountServiceImpl) {
    const isAuth = this.bankService.validatePinNumber(userAccount.getPinNumber());
    if (!isAuth) {
      throw new Error("PIN number is not authorized.");
    }
    this.setUserAccount(userAccount);
  }

  selectAccount(accountId: string) {
    if (!this.userAccount) {
      throw new Error("The account does not exist.");
    }

    const selectedAccount = this.userAccount.getUserAccount(accountId);
    if (!selectedAccount) {
      throw new Error("The account does not exist.");
    }
    this.setSelectedAccount(selectedAccount);
  }

  workOfBalance() {
    if (!this.userAccount || !this.selectedAccount) {
      throw new Error("please select Account.");
    }

    const result = this.userAccount.getBalance(this.selectedAccount);
    return result;
  }

  workOfDeposit(money: number) {
    if (!this.userAccount || !this.selectedAccount) {
      throw new Error("please select Account.");
    }

    this.userAccount.deposit(this.selectedAccount, money);
    this.cashLockerService.deposit(money);
  }

  workOfWithdraw(money: number) {
    if (!this.userAccount || !this.selectedAccount) {
      throw new Error("please select Account.");
    }

    this.userAccount.withdraw(this.selectedAccount, money);
    this.cashLockerService.withdraw(money);
  }
}
