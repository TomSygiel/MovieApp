export interface IMovieProducts {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export interface IOrderObject {
    // id: number;
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRow[];
}

export interface IOrderRow {
    // OrderId: number;
    ProductId: number;
    Amount: number;
}