import VideoCards from "../components/VideoCards"
import '../css/Home.css'
import Content from "../Content"
function Home(){
    return(
        <>
        <div className="homePage">
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
            <VideoCards content = {Content} />
        </div>
        </>
    )
}

export default Home