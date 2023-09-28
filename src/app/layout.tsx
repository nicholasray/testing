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
        <div>BlahLayout</div>
        <div><Link href={"/test"}>Blah</Link></div>
        {children}
      </body>
    </html>
  )
}
