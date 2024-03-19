export type FSCategories = string[]

export type FSProducts = FSProduct[]

export interface FSProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: FSProductRating
}

export interface FSProductRating {
  rate: number
  count: number
}

export type ExtendedFSProduct = FSProduct & { quantity: number };