export class Ingredient{
    // this is one way to define model in typescript
    constructor(public name: string, public amount: number){}

    /* Else we can use the below code
    // name: string;
    // amount: number;

    // constructor(name: string, amount: number){
    //     this.name = name;
    //     this.amount = amount;
    // }
    */
}