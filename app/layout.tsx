import '../styles/globals.css'
import Header from './Header';
import Providers from './Providers';

export default function RootLayout({ children, }: { children: React.ReactNode; }) {
  return (
    <html>
      <Providers>
        <body className='dark:bg-zink-900 transition-all duration-700'>
          <Header />
          <div className='mx-auto max-w-6xl py-4'>{children}</div>
        </body>
      </Providers>
    </html>
  )
}