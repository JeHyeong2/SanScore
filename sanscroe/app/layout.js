import "./globals.css";
import localFont from"next/font/local"

  
const pixel = localFont({
  src: "../public/font/DungGeunMo.ttf",
  display:"swap",
  weight :"400",
  variable :"--font-pixel"
})

const APP_NAME = "SanScore";
const APP_DEFAULT_TITLE = "산스코어!!";
const APP_TITLE_TEMPLATE = "Ss - PWA App";
const APP_DESCRIPTION = "체육대회점수판!";


export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport = {
  themeColor: "#358ef6",
};

export default function RootLayout({ children,modal }) {
  return (
    <html lang="en">

      <head>
      </head>
      <body className={pixel.className}>

      {children}
      {modal}

        
      
      </body>
    </html>
  );
}
