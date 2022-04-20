import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = { title, body, author }

        fetch('http://localhost:8000/blog', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/')
        })
    }
        
    return (
        <div className="create">
            <h1> New blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                type="text" required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea 
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
                />
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="luigi">Luigi</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
    );
}
 
export default Create;