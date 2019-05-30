export interface IMovieProducts {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
}

export interface IOrderObject {
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRow[];
}

export interface IOrderRow {
    ProductId: number;
    Amount: number;
}


export interface IOrderSummary {
    id: number;
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderSummaryRow[];
}

export interface IOrderSummaryRow {
    id: number;
    orderId: number;
    productId: number;
    amount: number;
}