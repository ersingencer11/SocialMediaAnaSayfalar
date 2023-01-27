import './style.css'
import React from 'react';
import { useState } from 'react';
import { Route , Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aside from './components/Aside';
import Content from './components/Content';
import Post from './pages/Post';
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import SavedPosts from './pages/SavedPosts'
import Stories from './pages/Stories'
import PostContext from './context/PostContext'

function App() {

  const [post, setPost] = useState(0)
  const values={
    post,
    setPost
  }

  return (
    <div className='App'>
      <PostContext.Provider value={values}>
        <Navbar />

        <Routes>
          <Route path='/' element={<Content />}></Route>
          <Route path='/post' element={<Post />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='/notifications' element={<Notifications />}></Route>
          <Route path='/savedposts' element={<SavedPosts />}></Route>
          <Route path='/stories' element={<Stories />}></Route>
        </Routes>

        <Aside />
      </PostContext.Provider>
    </div>      
  );
}

export default App;
