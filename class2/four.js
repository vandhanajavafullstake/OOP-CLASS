class Account {
    id;
    name;
    constructor(id,name,amount){
        this.id=id;
        this.name=name;
        this.amount=amount;
    }

}
let a1 = new Account(101,"rekha",3000)
console.log(a1)
let a2= new Account(102,"sonia")
console.log(a2)
let a3= new Account(103,"Asha",4972)
console.log(a3)