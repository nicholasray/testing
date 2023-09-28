import Link from 'next/link'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div>BlahLayout This is some text</div>
        <div><Link href={"/test"}>Blah</Link></div>
        {children}
      </body>
    </html>
  )
}
