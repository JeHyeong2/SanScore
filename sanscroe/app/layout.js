import "./globals.css";
import localFont from"next/font/local"


  
const pixel = localFont({
  src: "../public/font/DungGeunMo.ttf",
  display:"swap",
  weight :"400",
  variable :"--font-pixel"
})

export default function RootLayout({ children,modal }) {
  return (
    <html lang="en">
      <body className={pixel.className}>

      {children}
      {modal}

        
      
      </body>
    </html>
  );
}
