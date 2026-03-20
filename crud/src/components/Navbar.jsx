import Link from "next/link"
import "./Navbar.css"


export default function Navbar () {
    return(
    <nav>
      <h1>CRUDNEXT</h1>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
      <li>
        <Link href="/tienda">Tienda</Link>
      </li>
      <li>
        <Link href="/posts">posts</Link>
      </li>
    </ul>
    </nav>
    );

}