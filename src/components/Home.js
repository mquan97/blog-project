import {useState, useEffect} from 'react'
import BlogList from './BlogList';

const Home = () => {

    const [blog, setBlog] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ])

      const handleDelete = (id) => {
        const newBlogs = blog.filter(blog => (blog.id !== id))
        setBlog(newBlogs)
      }

      useEffect(() => {
          
      })

    return ( 
        <div className="home">
            <BlogList blog = {blog} titles = "Custom blog" handleDelete = {handleDelete}/>
            {/* <BlogList blog = {blog.filter(blog => { return (blog.author === 'yoshi')})} titles = "Yoshi's blog" /> */}
        </div>
    );
}
 
export default Home;