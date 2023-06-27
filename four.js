class Account{
    open_account(){
        console.log("Account opened Successfully")
    }
    deposit_Amount(){
        console.log("Amount deposited successfully")
    }
    get_balance(){
        console.log("server busy")
    }
    withdrawal(){
        console.log("insuffient balance ")
    }
    get_Statement(){
        console.log("charges apply")
    }
    close_Account(){
        console.log("closed account")
    }
}
let a1=new Account()
console.log(a1)
a1.open_account()
a1.deposit_Amount()
a1.get_balance()
a1.withdrawal()
a1.get_Statement()
a1.close_Account()
