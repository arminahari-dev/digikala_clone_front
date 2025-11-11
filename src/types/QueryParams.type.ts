// این فایل نوع پارامترهای جست‌وجوی API را تعریف می‌کند.
export default interface QueryParams {
  [x: string]: string | number | boolean | string[] | undefined
}
