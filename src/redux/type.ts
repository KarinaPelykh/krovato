export interface Product {
  _id: string
  image: string
  size: string
  title: string
  isAvailable: string
  price: string
  sale: string
}

export type ArrayOfProduct = {
  product: Product[]
}
