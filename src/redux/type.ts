export interface Product {
  _id: string
  image: string
  size: string
  title: string
  isAvailable: string
  price: string
  sale: string | null
}

export type ArrayOfProduct = {
  product: Product[]
  favorite?: Product[]
}
