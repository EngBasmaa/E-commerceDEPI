import { Product } from './product'

export interface CartItem {
    productId: number;
    quantity: number;
    product?: Product;
}