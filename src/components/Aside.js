export default function Aside(){
    return(
        <aside className="item3">
        <div className="upgrade-btn">
          <button type="button">Get unlimited access</button>
        </div>

        <form className="search-btn">
          <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
          <input type="text" placeholder="Search" name="search" />
        </form>

        <div>
          <p><b>Recommended topics</b></p>
          <button>Writing</button>
          <button>Relationships</button>
          <button>Machine Learning</button>
          <button>Politics</button>
          <button>Cryptocurrency</button>
        </div>

        <div>
          <p><b>Who to follow</b></p>
          <div>Avatar</div>
          <div>Avatar</div>
          <div>Avatar</div>
        </div>

        <div>
          <p><b>Reading list</b></p>
          <p>Click the <i className="fa-regular fa-bookmark"></i> on any story to easily add it to your reading list or a
            custom list that you can share.</p>
        </div>

        <div className="aside-nav">
          <a>Help</a>
          <a>Status</a>
          <a>Writers</a>
          <a>Blog</a>
          <a>Careers</a>
          <a>Privacy</a>
          <a>Terms</a>
          <a>About</a>
          <a>Text to speech</a>
        </div>

      </aside>
    )
}