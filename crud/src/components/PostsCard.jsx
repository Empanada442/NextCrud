"use client"
import Link from "next/link"

export default function PostsCard({post}) {
  return (
    <div>
    <Link href={`/posts/${post.id}`}>
    <h2>{post.id}. {post.title}</h2>
    </Link>
    
    <p>{post.body}</p>
    </div>
    
  )
}
