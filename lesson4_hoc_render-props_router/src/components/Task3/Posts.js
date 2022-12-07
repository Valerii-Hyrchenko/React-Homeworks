import { Post } from "./Post"

export const Posts = ({ posts }) => {
    return posts.map((post) => {
        let currentPost = {
            title: post.title,
            completed: post.completed,
        }
        return <Post key={post.id} post={currentPost}/>
    })
}