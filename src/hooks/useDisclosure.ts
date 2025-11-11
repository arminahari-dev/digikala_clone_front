// این هوک حالت باز/بسته بودن مودال‌ها یا منوها را مدیریت می‌کند.
import { useState } from 'react'

export default function useDisclosure(initialState = false) {
  const [isOpen, setIsOpen] = useState(initialState)

  const open = () => {
    if (!isOpen) setIsOpen(true)
  }

  const close = () => {
    if (isOpen) setIsOpen(false)
  }

  const toggle = () => {
    isOpen ? close() : open()
  }

  return [isOpen, { open, close, toggle }] as const
}
