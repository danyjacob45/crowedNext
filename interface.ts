/** Users */
export type User = {
  id: number,
  name: string
  surname: string
  email: string
  phone: string
  email_verified_at: Date,
  created_at: Date,
  updated_at: Date
}


export type UsersData = {
  current_page: number
  data: User[]
  first_page_url: string
  from: number
  last_page: number
  last_page_url: string
  next_page_url: string | null
  path: string
  per_page: number
  prev_page_url: string | null
  to: number
  total: number
}



/** Store */
export type Store = {
  id: number
  address_info: string | null
  bank_info: string | null
  ceo_name: string
  ceo_surname: string
  company_name: string
  company_phone: string
  company_website: string
  created_at: Date
  description: string
  document: string | null
  is_approved: number
  official_company_name: string
  slug: string
  status: number | null
  store_logo: string
  store_name: string
  type_of_activity: string
  updated_at: Date
}



/** Categories */
export type Category = {
  created_at: Date
  id: number
  is_default: boolean
  level: number
  name: string
  parent_id: number
  path: string
  position: number
  translations: []
  url_key: string
  url_path: string
}



/** Products */
export type ProductImage = {
  id: number
  image_url: string
  is_cover: boolean
  path: string
  product_id: number
}


export type Product = {
  id: number,
  category: Category
  category_id: number
  discount_price: number
  final_price: number
  images: ProductImage[]
  name: string
  original_price: number
  path:string
  price: number
  short_description: string
  sort_weight: number
  stock_qty: number
  store_id: number
  translations: []
  updated_at: Date
  url_paths: string | null
  user_id: number
  variations_meta: object
  visibility: number
}


export type ProductItems = {
  data: Product[],
  last_page: number
}


export type ProductsData = {
  items: {
    data: Product[],
    last_page: number,
    current_page: number,
    total: number
  },
  filters: {}
}


/** Orders */
export type Order = {
  id: number
  name: string,
  status: string,
  order_date: string,
  customer_id: number,
  customer_shipping_info: {
    address_info: number
  },
  payment_method: string,
  shipping_amount: number
}





/** Atributes */
export type Attribute = {
  id: number,
  attribute_code: string,
  frontend_type: string,
  is_unique: number,
  is_required: number,
  is_filterable: number,
  is_translatable: number,
  is_default: number,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date | null,
  is_multiselect: number,
  translations: OrderTrans[],
  options: OrderOption[],
  label: string,
  tooltip: string
}


export type OrderTrans = {
  id: number,
  attribute_id: number,
  label: string,
  tooltip: string,
  iso: string,
  created_at: Date,
  updated_at: Date
}


export type OrderOption = {
  id: number,
  attribute_id: number,
  sort_weight: number,
  created_at: Date,
  updated_at: Date,
  deleted_at: Date | null,
  attribute_value: string,
  translations: []
}


export type AttributesItems = {
  data: Attribute[],
  currenat_page: number,
  first_page_url: string,
  from: number,
  last_page: number,
  last_page_url: string,
  next_page_url: string,
  path: string,
  per_page: number,
  prev_page_url: string | null,
  to: number,
  total: number
}





/** Store state */
export type StoreState = {
  user: User
  users: UsersData,
  stores: Store[],
  categories: Category[],
  products: ProductsData,
  orders: Order[],
  attributes: AttributesItems
}