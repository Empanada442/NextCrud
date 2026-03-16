import Link from "next/link";
import Postspage from "../page";
import { Suspense } from "react";

export default async function Post({ params }) {
    const { id } = await params;
  
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
  
    return (
      <div>
        <h1>{post.id}. {post.title}</h1>
        <p>{post.body}</p>
        <Link href="/posts">Atras</Link>
        <hr />
        <Suspense fallback={<div>Cargando...</div>}>
        <Postspage></Postspage>
        </Suspense>
        
      </div>
      
    );
  }