export class Product {
    id: number;
    code: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    inventoryStatus: string;
    category: string;
    image?: string;
    rating?: number;

    constructor(code:string,name:string,description:string,price:number,quantity:number,
        invetoryStatus:string,category:string,image:string,rating:number
    ){
        this.code=code;
        this.name=name;
        this.description=description;
        this.price=price;
        this.quantity=quantity;
        this.inventoryStatus=invetoryStatus;
        this.category=category;
        this.image=image;
        this.rating=rating;
    }
}

export interface ProductDto{
    data:Product[];
}