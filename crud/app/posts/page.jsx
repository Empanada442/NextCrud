import PostsCard from "../../components/PostsCard"
async function loadPosts() {
   const re = await  fetch ("https://jsonplaceholder.typicode.com/posts")
   const data = await re.json()
   //console.log(data)
   return data
 
}

export default async function Postspage (){
    const  posts = await loadPosts()
    //console.log(posts)

    return(
        <div>
        {posts.map(post => (
            <PostsCard key={post.id} post={post}/>
         )
        )}
        </div>
    )
}