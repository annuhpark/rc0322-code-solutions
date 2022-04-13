/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  var newDeposit = new Transaction('deposit', amount);
  if (Math.sign(amount) === 1 && amount % 1 === 0) {
    this.transactions.push(newDeposit);
    return true;
  } else {
    return false;
  }
};

Account.prototype.withdraw = function (amount) {
  var newWithdrawal = new Transaction('withdrawal', amount);
  if (Math.sign(amount) === 1 && amount % 1 === 0) {
    this.transactions.push(newWithdrawal);
    // console.log(this.transactions);
    return true;
  } else {
    return false;
  }
};

Account.prototype.getBalance = function () {
  var total = 0;
  // console.log(this.transactions);
  // console.log(this.transactions[1].type);
  for (let i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      total = total + this.transactions[i].amount;
    } else if (this.transactions[i].type === 'withdrawal') {
      total = total - this.transactions[i].amount;
    }
  }
  return total;
};

// var newAccount = new Account(3222, 'Anna');
// console.log(newAccount.deposit(32));
// console.log(newAccount.withdraw(10));
// console.log(newAccount.getBalance());

// var account = new Account(42, 'Jeff Jefferson');
// account.deposit(100);
// account.withdraw(23);
