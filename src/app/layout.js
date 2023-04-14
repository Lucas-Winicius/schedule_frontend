import './globals.css'

export const metadata = {
  title: {
    template: '%s - Schedule',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
