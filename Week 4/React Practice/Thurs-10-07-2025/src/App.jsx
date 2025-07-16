// import React from "react";

// const App = () => {
//   const title = "welcome to the new blog";
//   const likes = 50;
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>Liked {likes} times</p>
//     </div>
//   );
// };

// export default App;

import React from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import Create from './Create'
import BlogDetails from './BlogDetails'

const App = () => {
  return (
    <Router>
    <div className="App font-[Quicksand] min-h-screen flex flex-col px-[200px] gap-y-7 py-7">
      <Navbar/>
      <hr className='border-gray-300 border-[]'/>
      <div className="content">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/create' element={<Create/>}/>
          <Route path='/blogs/:id' element={<BlogDetails/>}/>
        </Routes>
      </div>
    </div>
    </Router>
  )
}

export default App
