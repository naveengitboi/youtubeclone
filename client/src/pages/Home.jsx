import VideoCards from "../components/VideoCards"
import '../css/Home.css'
import ytData from '../data.js/Data'
function Home(){
    return(
        <>
        <VideoCards/>
        <div className="homePage">
           {
            ytData.map((item, index) => (
                <VideoCards vcData= {item}/>
            ))
           }
        </div>
        </>
    )
}

export default Home