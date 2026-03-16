import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <ul>
        <li>
          <Link href="/tienda/categorias">categorias</Link>
        </li>
        <li>
          <Link href="/tienda/categorias/computadoras">computadoras</Link>
        </li>
      </ul>

      {children}
    </>
  );
}