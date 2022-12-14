import { Account } from "../model";

export default interface UserAccountServiceImpl {
  getPinNumber: () => number;
  getUserAccounts: () => Account[];
  getUserAccount: (accountId: string) => Account | null;
  deposit: (account: Account, money: number) => void;
  withdraw: (account: Account, money: number) => void;
}
