// این فایل نوع آدرس کاربر را تعریف می‌کند.
export default interface IAddress {
  postalCode: string
  street: string
  city: {
    id: number
    name: string
    slug: string
    province_id: number
  }
  province: {
    id: number
    name: string
    slug: string
  }
}
