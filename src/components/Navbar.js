const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1> The World Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
                <a href="/delete">Delete</a>
            </div>
        </nav>
    );
}

export default Navbar
