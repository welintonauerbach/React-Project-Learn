import "./styles.css"
import { PostCard } from "../PostCard"

export const Posts = ({ posts, appEnable }) => (
    <div className='posts' hidden={appEnable}>
        {posts.map(post => (
            <PostCard key={post.id}
                id={post.id}
                image={post.image}
                title={post.title}
                body={post.body}
            />
        ))}
    </div>
);