import Navbar from "../components/navbar"
 
 export default function Layout({ children }) {
      return (
        <html>
          <body>
            <Navbar />
            {children}
          </body>
        </html>
      );
    }