class Account{
    min_Bal=500
    acc_Bal=0
    deposite_Amount(amount){
        this.acc_Bal=this.acc_Bal+amount
    }
    get_Bal(){
        return this.acc_Bal-this.min_Bal
    }
}
let a1=new Account()
let a2=new Account()
a1.deposite_Amount(5001)
a2.deposite_Amount(15001)

console.log(a1.get_Bal())
console.log(a2.get_Bal())