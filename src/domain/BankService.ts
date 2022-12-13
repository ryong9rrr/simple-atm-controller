import BankServiceImpl from "./BankServiceImpl";

export default class BankService implements BankServiceImpl {
  validatePinNumber(pinNumber: number) {
    return true;
  }
}
