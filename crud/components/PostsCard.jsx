"use client"

export default function PostsCard({post}) {
  return (
    <div>
    <h2>{post.id}. {post.title}</h2>
    <p>{post.body}</p>
    <button onClick={() => alert(post.id)}>Show id</button>
    </div>
    
  )
}
