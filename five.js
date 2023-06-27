class Account{
    minimum_balance=500;
    open_account(){
        console.log("Account opened Successfully")
    }
    deposit_Amount(amount){
        console.log(amount,"Amount deposited successfully")
    }
    get_balance(amount){
        console.log(amount,"server busy")
    }
    withdrawal(amount){
        console.log(amount,"insuffient balance ")
    }
    get_Statement(amount){
        console.log(amount,"charges apply")
    }
    close_Account(){
        console.log("closed account")
    }
}
let a1=new Account()
console.log(a1)
a1.open_account()
a1.deposit_Amount(5000)
a1.get_balance(5000)
a1.withdrawal(0)
a1.get_Statement(300)
a1.close_Account()
