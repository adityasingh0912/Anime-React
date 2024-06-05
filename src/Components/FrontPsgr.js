import React from 'react'
// import Sidebar from './Sidebar'
import './frontpage.css'
import logo from '../Assets/images.jpeg'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FrontPsgr = () => {
  return (
    <FrontStyled>
    <div className='first'>
       <div className='Head'>
           <h1>Anime World</h1>
       </div>
      
        <main>
              <div className='description'>
              Here's a possible description of an anime page created by you:

                  **Welcome to [Your Page Name]!**

                  This is a community-driven anime page created by [Your Name], a passionate anime enthusiast. As a hub for all things anime, this page is dedicated to sharing the latest news, updates, and discussions about the world of Japanese animation.

                  **What to Expect:**

                  * **Anime Reviews**: Get insider scoops and honest reviews of the latest anime series and movies, written by yours truly.
                  * **News and Updates**: Stay ahead of the curve with the latest announcements, releases, and industry trends in the anime world.
                  * **Character Spotlight**: Dive into the fascinating world of anime characters, with in-depth profiles, analysis, and fan art.
                  * **Community Engagement**: Join the conversation! Share your thoughts, opinions, and favorite anime moments with fellow enthusiasts.
                  * **Recommendations**: Discover new anime series and hidden gems, handpicked by yours truly.

                  **Follow Us:**

                  Stay up-to-date with the latest anime news, reviews, and discussions by following this page. Let's build a vibrant anime community together!
              </div>
               <div className='img'>
               <img src={logo} alt='Anime dot com'/>
               </div>
        </main>
        <Link to="/">
              <button>
                  HomePage
              </button>
            </Link>
        <div className='Feature'>
          <h2>Feature section</h2>
          <div>
          **Features:**

            * **Anime of the Month**: A special section highlighting a standout anime series, complete with reviews, summaries, and behind-the-scenes insights.
            * **Top 10 Lists**: Get ready for countdowns of the most epic anime battles, romantic moments, and more!
            * **Anime-inspired Art**: Showcasing talented artists and their stunning anime-inspired creations.

            **Join the Fun!**

            Whether you're a seasoned otaku or just starting your anime journey, this page is the perfect place to connect with like-minded fans, 
            learn about new anime, and share your passion for Japanese animation. So, sit back, relax, and get ready to immerse yourself in the
             wonderful world of anime!
          </div>
        </div>
    </div>
    </FrontStyled>
  )
}

export default FrontPsgr

const FrontStyled = styled.div`
background-color: #rgb(36, 36, 40);;
button{
  display: flex;
  align-items: center;
  gap: .5rem;
  padding: .7rem 1.5rem;
  outline: none;
  border-radius: 30px;
  font-size: 1.2rem;
  background-color: #fff;
  cursor: pointer;
  transition: all .4s ease-in-out;
  font-family: inherit;
  border: 5px solid #e5e7eb;
}
.maindesc{
  display:flex;
}
.first{
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.Head{
  display:flex;
  justify-content: center;
  margin:20px;
}
.img{
  display:flex;
  justify-content:right;
  margin:100px;
}
main{
  margin:30px;
  display:flex;
  align-items: center;
  background:#fff;
  width:90%;
  flex-wrap: wrap; 
  gap: 20px;
  justify-content:space-between;
}
main img{
  wi
}
.description{
  width:40%;
}
`