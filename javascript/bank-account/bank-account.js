//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
    constructor() {
        this.opened = false
    }

    open() {
        if (this.opened) {
            throw new ValueError()
        } else {
            this.opened = true
            this.accountBalance = 0
        }
    }

    close() {
        if (!this.opened) {
            throw new ValueError()
        } else {
            this.opened = false
        }
    }

    deposit(n) {
        if (!this.opened || n < 0) {
            throw new ValueError()
        } else {
            this.accountBalance += n
        }
    }

    withdraw(n) {
        if (!this.opened || n < 0 || this.accountBalance - n < 0) {
            throw new ValueError()
        } else {
            this.accountBalance -= n
        }
    }

    get balance() {
        if (!this.opened) {
            throw new ValueError()
        } else {
            return this.accountBalance
        }
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error')
    }
}
