export interface ProductInterface {
  id: number
  title: string
  description: string
  image: string
}

export interface StateInterface {
  products: ProductInterface[]
  shoppingCart: ProductInterface[]
}

export interface ActionInterface {
  type: string
  payload: unknown
}
