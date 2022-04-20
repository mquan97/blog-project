import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    const URL = 'http://localhost:8000/blog'
    const { data, isPending, err } = useFetch(URL)

    console.log(useFetch(URL))

    return ( 
        <div className="home">
            { isPending && <div>Loading ...</div> }
            {/* { err && <div>{ err }</div> } */}
            { err && <div>{ err }</div> }
            { data && <BlogList blog = {data} titles = "Custom blog" /> }
            {/* <BlogList blog = {blog.filter(blog => { return (blog.author === 'yoshi')})} titles = "Yoshi's blog" /> */}
        </div>
    );
}
 
export default Home;