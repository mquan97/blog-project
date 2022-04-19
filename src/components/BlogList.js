

const BlogList = ({blog, titles, handleDelete}) => {
    return ( 
        <div className="blog-list">
            <h2>{titles}</h2>
            {blog.map(blog => {
                return (
                    <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author}</p>
                    <button onClick={() => handleDelete(blog.id)}>delete blog</button>
                    </div>
                )})
            }
        </div>
    );
}
 
export default BlogList;