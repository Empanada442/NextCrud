import { Inter } from "next/font/google";
import Navbar from "@/Components/Navbar";
import "./globals.css";

export const metadata = {
  title: "CRUDNEXT",
  Charset: "UTF-8",
}
 
const inter = Inter({
  subsets: ["latin"],
});


 export default function Layout({ children }) {
      return (
        <html>
          <body className={inter.className}>
            <Navbar />
            {children}
          </body>
        </html>
      );
    }