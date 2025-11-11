// این تابع ارسال خطا را در پاسخ‌های API ساده می‌کند.

import type { NextApiResponse } from 'next'

export default function sendError(res: NextApiResponse, statusCode: number, msg: string) {
  res.status(statusCode).json(msg)
}
