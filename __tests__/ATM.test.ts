import ATM from "../src/domain/ATM";
import CashService from "../__tests-utils__/CashLocker";
import BankService from "../__tests-utils__/BankService";
import UserAccount from "../__tests-utils__/UserAccount";
import { Account } from "../src/model";

let atm: ATM | null;
let userAccount: UserAccount | null;

describe("ATM Controller Test", () => {
  beforeEach(() => {
    atm = new ATM({
      bankService: new BankService(),
      cashLockerService: new CashService(),
    });

    userAccount = new UserAccount(123456789);
    userAccount.createAccount("user-account-id-1", 111122223333);
    userAccount.createAccount("user-account-id-2", 111122224444);
    userAccount.createAccount("user-account-id-3", 111122225555);
    userAccount.createAccount("user-account-id-4", 111122226666);
  });

  test("constructor()", () => {
    expect(atm).not.toBeNull();
  });

  test("insert()", () => {
    atm!.insert(userAccount!);
    expect(atm!.getCurrentUserAccount()).toEqual(userAccount);
  });

  test("selectAccount() - exception : if not insert userAccount", () => {
    expect(() => {
      atm!.selectAccount("user-account-id-1");
    }).toThrow();
  });

  test("selectAccount() - exception : if inValid accountId", () => {
    atm!.insert(userAccount!);
    expect(() => {
      atm!.selectAccount("user-account-id-100");
    }).toThrow();
  });

  test("selectAccount()", () => {
    atm!.insert(userAccount!);
    atm!.selectAccount("user-account-id-1");
    const selectedAccount = atm!.getCurrentSelectedAccount();
    const resultAccount: Account = {
      id: "user-account-id-1",
      accountNumber: 111122223333,
      money: 0,
    };
    expect(selectedAccount).toEqual(resultAccount);
  });

  test("workOfBalance() - exception : if not select account", () => {
    atm!.insert(userAccount!);
    expect(() => {
      atm!.workOfBalance();
    }).toThrow();
  });

  test("workOfBalance()", () => {
    atm!.insert(userAccount!);
    atm!.selectAccount("user-account-id-1");
    const balance = atm!.workOfBalance();
    expect(balance).toEqual(0);
  });

  test("workOfDeposit() - exception : if not select account", () => {
    atm!.insert(userAccount!);
    expect(() => {
      atm!.workOfDeposit(1000);
    }).toThrow();
  });

  test("workOfDeposit()", () => {
    atm!.insert(userAccount!);
    atm!.selectAccount("user-account-id-1");
    atm!.workOfDeposit(1000);
    const myAccount = userAccount!.getUserAccount("user-account-id-1");
    expect(myAccount!.money).toEqual(1000);
  });

  test("workOfWithdraw() - exception : if not select account", () => {
    atm!.insert(userAccount!);
    expect(() => {
      atm!.workOfWithdraw(1000);
    }).toThrow();
  });

  test("workOfWithdraw() - exception : if not enough money", () => {
    atm!.insert(userAccount!);
    atm!.selectAccount("user-account-id-1");
    expect(() => {
      atm!.workOfWithdraw(1000);
    }).toThrow();
  });

  test("workOfWithdraw()", () => {
    atm!.insert(userAccount!);
    atm!.selectAccount("user-account-id-1");
    atm!.workOfDeposit(10000);
    atm!.workOfWithdraw(1000);
    const myAccount = userAccount!.getUserAccount("user-account-id-1");
    expect(myAccount!.money).toEqual(9000);
  });

  test("work end", () => {
    // some working...
    atm!.insert(userAccount!);
    atm!.selectAccount("user-account-id-1");
    atm!.workOfDeposit(10000);
    atm!.workOfWithdraw(1000);
    // check ATM
    atm!.endWork();
    expect(atm!.getCurrentSelectedAccount()).toBeNull();
    expect(atm!.getCurrentUserAccount()).toBeNull();
  });
});
