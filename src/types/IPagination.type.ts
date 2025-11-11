// این فایل نوع صفحه‌بندی نتایج را تعریف می‌کند.
export default interface IPagination {
  currentPage: number
  nextPage: number
  previousPage: number
  hasNextPage: boolean
  hasPreviousPage: boolean
  lastPage: number
}
