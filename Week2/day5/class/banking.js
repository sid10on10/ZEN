class Bank{
    code;
    address;
    Customer;
    ATM
    constructor(code, address){
        this.code = code;
        this.address = address;
    }

    manages(){}
    maintains(){}
}

class Account{
    number;
    balance;
    deposit(){}
    withdraw(){}
    createTransaction(){}
}

class Customer{
    name;
    address;
    dob;
    cardNumber;
    pin;
    Account
    verifyPassword(){}
}

class ATM{
    loction;
    managedBy;
    idenfies(){}
    transaction(){}
}

class ATM_Transaction{
    transactionId;
    date;
    type;
    amount;
    postBalance;
    modifies(){}
}

class CurrentAccount extends Account{
}

class SavingAccount extends Account{
    
}