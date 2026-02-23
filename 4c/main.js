class Password{
    #value;
    constructor(password){
        this.#value = password;
    }
    check(input){
        return input === this.#value;
    }
     
}

const pw = new Password("hemligt");
console.log(pw.check("hemligt"));
console.log(pw.check("fel"));

class Person{
    #firstName;
    #lastName;
    constructor(firstName, lastName){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }
    get fullName(){
        return this.#firstName+ " " + this.#lastName;
    }
    get initials(){
        return this.#firstName[0] + this.#lastName[0];
    }
}

const person1 = new Person("Linnéa", "Kjellqvist");
console.log(person1.fullName);
console.log(person1.initials);

class Product {
    #name;
    #price;
    constructor(name, price){
        this.#name = name;
        this.#price = price;
    }
    get name(){
        return this.#name;
    }
    get price(){
        return this.#price;
    }
    set price(value){
        if(typeof value !== "number" || value <= 0){
            console.log("Priset är ogiltigt");
            return;
        }
        this.#price = value;
    }
}

const product1 = new Product("tröja", 400);
const product2 = new Product("byxor");
product2.price = -500;
console.log(product2.price);
console.log(product1.name, product2.name);
console.log(product1.price
);

class Student{
    #name;
    #grade;
    constructor(name, grade){
        this.#name = name;
        this.#grade = grade;
    }
    get name(){
        return this.#name;
    }
    addGrade(grade){ // varför skriver man typeof 
        if( typeof grade !== "number" || grade < 0 || grade > 100){
            console.log("Ogiltigt betyg");
            return;
        }
        this.#grade.push(grade);
    }
    get average(){
        if(this.#grade.length === 0) return 0;
        let sum = 0;
        for (const grade of this.#grade){
            sum += grade;
        }
        return sum / this.#grade.length;
    }
    get status(){
        return this.average >= 50 ? "Godkänd" : "Underkänd";
    }
}

const student1 = new Student("Amanda");
student1.addGrade(80);
student1.addGrade(45);
student1.addGrade(60);
console.log(student1.name);// går inte varför?

