
export const PostCard = ({title, image, body, id}) => (        
        <div className='post'>
            <img src={image} alt={title}></img>
            <div className="post-content">
                <h3>Title: {title}</h3>
                <h5>Id: {id}</h5>
                <p>Content: {body}</p>
            </div>
        </div>
    )
