import { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import PostContext from '../context/PostContext'

const pageNumber = 0

function Content() {
    const [page, setPage] = useState(pageNumber)
    const [posts, setPosts] = useState([])

    const {setPost}=useContext(PostContext)
    

    useEffect(() => {

            const fetchPosts = async()=>{
                const response = await axios.get(`http://localhost:8000/posts/${page}`)
                setPosts((prev)=>{
                    console.log(response.data)
                    return [...prev, ...response.data]
                })                
                
            }
            
            fetchPosts()
            
            
    }, [page])

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

    const likePost = async (post) => {
        await axios.post(`http://localhost:8000/interaction/${post._id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(console.log("You liked this post."))
    }
    const savePost = async (post) => {
        await axios.patch(`http://localhost:8000/interaction/${post._id}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
            .finally(console.log("You saved this post."))
    }

    const handleClick = async (post)=>{
            setPost(post)
    }

    const displayPosts = posts.map((post) => {
        return (
                <div key={post._id} className='post'>
                    <div className='author-section'>
                        <p><Link to='/profile' style={{ fontSize: 15, color: '#45a29e' }}><b>{post.user.email}</b></Link> <span style={{ color: 'gray' }}>{post.createdAt}</span></p>
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
                            <button style={{ color: '#45a29e' }} onClick={() => likePost(post)}><i className="fa-regular fa-heart"></i></ button>
                            <button style={{ marginLeft: 20, marginRight: 20, color: '#45a29e' }}><i className="fa-regular fa-comment"></i></button>
                            <button onClick={()=>savePost(post)} style={{ color: '#45a29e' }}><i className="fa-regular fa-bookmark"></i></button>
                        </div>

                    </div>
                    <br />
                </div>
        
        )
    })

    return (
        <section className='item2'>

            {displayPosts}

        </section>
    )
}

export default Content