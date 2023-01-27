import { useContext, useState, useEffect } from 'react'
import axios from 'axios';
import PostContext from '../context/PostContext'
import { Link } from 'react-router-dom';


function Post() {

  const { post } = useContext(PostContext)
  const [comments, setComments] = useState([])
  

  useEffect(() => {

    const fetchComments = async () => {
      const response = await axios.get(`http://localhost:8000/comments/${post._id}`)
      
      console.log(response.data)
      setComments(response.data)
    }

    fetchComments()
  }, [post])

  const displayComments = comments.map((comment) => {
    return (
        <div key={comment._id} className='comment'>
          <div className='author-section'>
            <p><Link to='/profile' style={{ fontSize: 12, color: '#45a29e' }}><b>{comment.user.email}</b></Link> <span style={{ color: 'gray' }}>{comment.createdAt}</span></p>
          </div>

          <div className='main-content'>
            <p>{comment.commenttext}</p>
          </div>
        </div>
    )
  })
  
  

  const commentSectionToggle = ()=>{
    var toggleSection = document.getElementById("makeCommentSection");
    if (toggleSection.style.display === "none") {
      toggleSection.style.display = "block";
    } else {
      toggleSection.style.display = "none";
    }
  }
  


  return (
    <>
      <div className='item2'>
        <div className='post'>

          <div className='author-section'>
            <p><Link to='/profile' style={{ fontSize: 15, color: '#45a29e' }}><b>{post.user.email}</b></Link> <span style={{ color: 'gray' }}>{post.createdAt}</span></p>
          </div>

          <div className='main-content'>
            <h2>{post.posttitle}</h2>
            <p>{post.posttext}</p>
          </div>

          <div className='footer-section'>
            <div>
              <button style={{ backgroundColor: '#45a29e', color: '#1F2833' }} id='category-btn'>{post.categories}</button>
            </div>

            <div>
              <button style={{ color: '#45a29e' }}><i className="fa-regular fa-heart"></i></ button>
              <button onClick={()=>{commentSectionToggle()}} style={{ marginLeft: 20, marginRight: 20, color: '#45a29e' }}><i className="fa-regular fa-comment"></i></button>
              <button style={{ color: '#45a29e' }}><i className="fa-regular fa-bookmark"></i></button>
            </div>
          </div>
          <br />
        </div>

        <form id='makeCommentSection' style={{display:'none', marginTop:'2%'}} action={`http://localhost:8000/comments/${post._id}`} method="POST">
            <div>
              <textarea name='commenttext' style={{width:'100%', backgroundColor:'#c5c6c7', color:'#1F2833'}}  placeholder={'Yorum yap...'} rows={'5'}></textarea>
            </div>
            
            <button style={{backgroundColor: '#45a29e',color:'#1F2833'}} type='submit'>Gönder</button>
        </form>
        
           
      

        <h3>Comments({comments.length})</h3>
        {displayComments}

        <h3>Benzer Yazilar</h3>
      </div>

      
    </>
  )
}

export default Post