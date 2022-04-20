import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Create from './components/Create';
import Blog from './components/Blog';
import ErrorList from './components/Error';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>      
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/blog/:di' element={<Blog />} />
            <Route path='*' element={<ErrorList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
