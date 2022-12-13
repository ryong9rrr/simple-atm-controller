import CashService from "../__tests-utils__/CashLocker";
import BankService from "../__tests-utils__/BankService";
import ATM from "../src/domain/ATM";

let atm: ATM | null;

describe("ATM Controller Test", () => {
  beforeEach(() => {
    atm = new ATM(new BankService(), new CashService());
  });

  test("ATM constructor()", () => {
    expect(atm).not.toBeNull();
  });
});
