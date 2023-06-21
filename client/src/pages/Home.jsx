import VideoCards from "../components/VideoCards"
import '../css/Home.css'
import ytData from '../data.js/Data'
function Home(){
    return(
        <>
        <div className="homePage">
           {
            ytData.map((item, index) => (
                <VideoCards key={index} vcData= {item}/>
            ))
           }
        </div>
        </>
    )
}

export default Home