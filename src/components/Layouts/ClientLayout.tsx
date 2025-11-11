// این لایه چیدمان عمومی سمت کاربر را با هدر، فوتر و محتوا ارائه می‌دهد.
import { Header, Footer } from '@/components/shared'

interface Props {
  children: React.ReactNode
}

const ClientLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default ClientLayout
