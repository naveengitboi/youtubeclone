import VideoCards from "../components/VideoCards"
import Content from "../Content"
function Home(){
    return(
        <>
        <div className="page">
            <VideoCards content = {Content} />
        </div>
        </>
    )
}

export default Home