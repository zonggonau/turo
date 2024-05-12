import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav";
import Infoprofile from "./components/nav/Infoprofile";


const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "MaMa";
const APP_DEFAULT_TITLE = "Mari Makan";
const APP_TITLE_TEMPLATE = "%s - Mari Makan";
const APP_DESCRIPTION = "Mari Makan adalah teman setia Anda dalam menjelajahi kelezatan kuliner Papua.Temukan beragam hidangan khas dan cemilan lezat dari penjual lokal, pesan dengan mudah, dan nikmati pengantaran langsung ke tempat Anda.Jadikan setiap makanan petualangan baru dengan Mari Makan.";

export const metadata = {
  applicationName: APP_NAME,
  manifest: '/manifest.json',
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  themeColor: "#212121",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Infoprofile />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
