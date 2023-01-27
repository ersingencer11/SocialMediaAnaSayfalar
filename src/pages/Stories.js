import React, {useState, useEffect,useContext} from 'react'
import axios from 'axios';

import PostContext from '../context/PostContext'
import { Link } from 'react-router-dom';

const pageNumber = 0
function Stories() {
  const [page, setPage] = useState(pageNumber)
  const [posts, setPosts] = useState([])
  const [user,setUser]=useState()
  const {setPost}=useContext(PostContext)


  useEffect(() => {

    const fetchPosts = async()=>{
        const response = await axios.get(`http://localhost:8000/users/userposts/${pageNumber}`)
        setPosts((prev)=>{
            console.log(response.data.posts)
            return [...prev, ...response.data.posts]
        })                
        setUser(response.data)
    }
    
    fetchPosts()
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    })

    const handleScroll = async () => {
        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) 
        {
            
            setPage((prev) => prev + 1);
            console.log(page)
            
        }
    }


    const handleClick = async (post)=>{
        setPost(post)
     }

     const displayPosts = posts.map((post) => {
        return (
                <div key={post._id} className='post'>
                    <div className='author-section'>
                        <p><Link to='/profile' style={{ fontSize: 15, color: '#45a29e' }}><b>{user.email}</b></Link> <span style={{ color: 'gray' }}>{post.createdAt}</span></p>
                    </div>
    
                    <Link to='/post' className='main-content' onClick={()=>handleClick(post)}>
                        <h2>{post.posttitle}</h2>
                        <p>{post.posttext}</p>
                    </Link>
    
                    <div className='footer-section'>
                        <div>
                            <button style={{ backgroundColor: '#45a29e', color: '#1F2833' }} id='category-btn'>{post.categories}</button>
                        </div>
    
                        <div>
                            <button style={{ color: '#45a29e' }} ><i className="fa-regular fa-heart"></i></ button>
                            <button style={{ marginLeft: 20, marginRight: 20, color: '#45a29e' }}><i className="fa-regular fa-comment"></i></button>
                            <button style={{ color: '#45a29e' }}><i className="fa-regular fa-bookmark"></i></button>
                        </div>
    
                    </div>
                    <br />
                </div>
        
        )
    })

  return (
    <div className='item2'>
      <h1>Gönderilerin</h1>
      {displayPosts}

    </div>
  )
}

export default Stories