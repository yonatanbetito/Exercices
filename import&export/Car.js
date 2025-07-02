export class Car {
    constructor(make,model){
        this.make = make
        this.model = model
    }
    getDetails(){
        console.log(`${this.make} is ${this.model}`);
    }
}
