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
        <div>TestLayout</div>
        <div><Link href={"/test"}>Test</Link></div>
        {children}
      </body>
    </html>
  )
}
