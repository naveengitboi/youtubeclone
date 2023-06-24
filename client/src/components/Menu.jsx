import '../css/Menu.css'
import { NavLink } from "react-router-dom"
import {AiFillHome, AiFillYoutube, AiOutlineHistory,AiOutlineLike,AiOutlineFire,AiOutlineShopping, AiOutlineFlag, AiOutlineVideoCamera, AiOutlineWifi, AiOutlineRead, AiOutlineCopyrightCircle} from 'react-icons/ai'
import {MdVideoLibrary, MdOutlineWatchLater,MdOutlineSettings, MdOutlineHelpOutline,MdOutlineFeedback, MdNewspaper} from 'react-icons/md'
import {BsFilm} from 'react-icons/bs'
import {SiYoutubegaming} from 'react-icons/si'


function Menu({closingTime}){

    return(
        <div className="menuContainer" style={closingTime?{left:"-40vw"} : {left:0}}>   
           
            <ul className="navLinks">
                <NavLink to='/' ><AiFillHome/> Home</NavLink>
                <NavLink to='/shorts' ><AiFillHome/> Shorts</NavLink>
                <NavLink to='/subscriptions' ><AiFillHome/> Subscriptions</NavLink>
                <hr />
                <NavLink to='/library' ><MdVideoLibrary/> Library</NavLink>
                <NavLink><AiOutlineHistory/> History</NavLink>
                <NavLink><AiOutlineVideoCamera/> your videos</NavLink>
                <NavLink><MdOutlineWatchLater/> Watch Later</NavLink>
                <NavLink><AiOutlineLike/> Liked Videos</NavLink>
                <hr />
                <p>Explore</p>
                <NavLink><AiOutlineFire/> Trending</NavLink>
                <NavLink><AiOutlineShopping/> Shopping</NavLink>
                <NavLink><SiYoutubegaming/> Gaming</NavLink>
                <NavLink><BsFilm/> Films</NavLink>
                <NavLink><AiOutlineWifi/> Live</NavLink>
                <NavLink><MdNewspaper/> News</NavLink>
                <NavLink><AiOutlineRead/> Learning</NavLink>
                <hr />
                <NavLink><MdOutlineSettings/> Settings</NavLink>
                <NavLink><AiOutlineFlag/> Report History</NavLink>
                <NavLink><MdOutlineHelpOutline/> Help</NavLink>
                <NavLink><MdOutlineFeedback/> Send Feedback</NavLink>

                <p className='copyrightSection'>About Press Copyright  <br /> Contact Us Creator Advertise <br /> Developers 
                    <br />
                Terms Privacy Policy & Safety <br />
                How JustWatch <br /> works Test new Features 

                <br />
                <span> <AiOutlineCopyrightCircle/> 2023 Google LLC </span>
                </p>
            </ul>
        </div>
    )
}

export default Menu