export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  defaultPriceId: string;
}

export interface CartContextData {
  cart: IProduct[]
  addToCart: (product: IProduct) => void
  removeFromCart: (productId: string) => void
}
