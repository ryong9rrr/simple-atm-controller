export default interface CashLockerImpl {
  deposit: (money: number) => void;
  withdraw: (money: number) => void;
}
