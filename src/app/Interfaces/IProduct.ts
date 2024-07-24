import { Ibrand } from "./Ibrand"
import { Icategory } from "./Icategory"
import { Isubcategory } from "./Isubcategory"

export interface IProduct {
  sold:number
  images:string[]
  subcategory:Isubcategory[]
  ratingsQuantity:number
  _id:string
  title:string
  slug:string
  description:string
  quantity:number
  price:number
  category:Icategory
  brand:Ibrand
  ratingsAverage:number
  imageCover:string

}



