import { Account } from "../model";

export default interface UserAccountServiceImpl {
  getPinNumber: () => number;
  getUserAccounts: () => Account[];
  getUserAccount: (accountId: string) => Account | null;
  getBalance: (account: Account) => number;
  deposit: (account: Account, money: number) => void;
  withdraw: (account: Account, money: number) => void;
}
