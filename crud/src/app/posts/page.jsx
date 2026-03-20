import PostsCard from "@/components/PostsCard";
import "./Posts.css"



async function loadPosts() {
   const re = await  fetch ("https://jsonplaceholder.typicode.com/posts")
   const data = await re.json()
   //console.log(data)
   await new Promise(resolve => setTimeout(resolve, 2000))
   return data
 
}

export default async function Postspage (){
    const posts = await loadPosts()

    return(
        <div className="posts-container">
        {posts.map(post => (
            <PostsCard key={post.id} post={post}/>
        ))}
        </div>
    )
}