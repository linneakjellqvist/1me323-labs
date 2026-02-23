class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }

    getPerimeter(){
        return 2 * this.width + 2 * this.height;
    }
    describe(){
        return `Rektangel: ${this.width} x ${this.height} (area: ${this.getArea()}, omkrets: ${this.getPerimeter()})`;
    }
}

const rt1 = new Rectangle(5, 10);
const rt2 = new Rectangle(3, 4);

console.log(rt1.getArea());
console.log(rt1.getPerimeter());
console.log(rt1.describe());

class ShoppingCart {
    constructor(){
        this.items = [];
    }
    addItem(item){
        this.items.push({name: item, quantity: 1});
    }
    getTotal(){
        let total = 0;
        for (const item of this.items){
            total += item.quantity;
        }
        return total;
    }
    listItems(){
        for(const item of this.items){
        console.log(item.name, item.quantity);
        }
    }
}

const cart = new ShoppingCart();
cart.addItem("Äpple");
cart.addItem("Banan");
cart.addItem("Apelsin");

console.log("Totalt antal varor:", cart.getTotal());
cart.listItems();

class Clicker{
    constructor(){
        this.count = 0;
    }
    setup(){
        const button = document.getElementById("clicker");

        button.addEventListener("click", () => {
            this.count++;
            console.log(this.count);
        })
        };
    
    }
const clicker = new Clicker();
clicker.setup();