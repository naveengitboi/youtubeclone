import { useEffect, useState } from "react";
import VideoCards from "../components/VideoCards"
import '../css/Home.css'
import axios from 'axios';

function Trending(props){
    const {type}= props;
    const [videos, setVideos] = useState([]);
    
    useEffect(() => {
        const fetchVideos = async () => {
            const result = await axios.get(`http://localhost:8000/api/videos/${type}`);
            setVideos(result.data)
        }
        fetchVideos();
    }, [])
    
    console.log(videos)
    return(
        <>
        <div className="homePage">
           {
            videos.map((item, index) => (
                <VideoCards key={index} vcData= {item}/>
            ))
           }
        </div>
        </>
    )
}

export default Trending