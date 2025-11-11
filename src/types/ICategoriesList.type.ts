// این فایل نوع لیست دسته‌بندی‌ها را تعریف می‌کند.
import type { ICategory } from '@/types'

export default interface ICategoriesList extends ICategory {
  children?: ICategoriesList[]
}
