import ATM from "../src/domain/ATM";
import CashService from "../__tests-utils__/CashLocker";
import BankService from "../__tests-utils__/BankService";
import UserAccount from "../__tests-utils__/UserAccount";

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
});
