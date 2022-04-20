import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Blog = () => {
    const {di} = useParams()
    const { data, isPending, err } = useFetch(`http://localhost:8000/blog/${di}`)
    const navigate = useNavigate()

    const handleClick = () => {
        fetch (`http://localhost:8000/blog/${di}`,{
            method: 'DELETE'
        }).then (() => {
            navigate('/')
        })
    }

    return ( 
        <div className="blog-details">
            { isPending && <div>Loading ...</div> }
            { err && <div>{ err }</div> }
            { data && (
                <div>
                    <h2>{ data.title }</h2>
                    <p>{ data.body }</p>
                    <footer>Written by { data.author }</footer>
                    <button onClick={handleClick}>Delete</button>     
                </div> 
            )
            }
        </div>
    );
}
 
export default Blog;