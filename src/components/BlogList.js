

const BlogList = ({blog, titles}) => {
    return ( 
        <div className="blog-list">
            <h2>{titles}</h2>
            {blog.map(blog => {
                return (
                    <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author}</p>
                    </div>
                )})
            }
        </div>
    );
}
 
export default BlogList;