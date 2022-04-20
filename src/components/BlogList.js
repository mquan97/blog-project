import { Link } from "react-router-dom";

const BlogList = ({blog, titles}) => {
    return ( 
        <div className="blog-list">
            <h2>{titles}</h2>
            {blog.map(blog => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            <h2>{ blog.title }</h2>
                            <p>Written by { blog.author }</p>
                        </Link>
                    </div>
                )})
            }
        </div>
    );
}
 
export default BlogList;