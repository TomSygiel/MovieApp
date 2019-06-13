export interface IMovieProducts {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    productCategory: IProductCategory[];
}

export interface IProductCategory {
    categoryId: number, 
    category: null
}

export interface IOrderObject {
    id: number;
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

export interface ICategorySelector {
    id: number;
    name: string;
}