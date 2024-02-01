import AttractionBanner from "../../_components/attraction-banner";
import CommentCard from "../../_components/comment-card";

const HomePage = () => {
    return(
        <div className="fixed inset-x-96 inset-y-32">
            <CommentCard/>
            <AttractionBanner 
            imageSrc="/obs cafe 1.png" 
            attractionName="Obs Cafe" 
            rating={4.5} 
            attractionDesc="Italian Restaurant
            Welcome to Obz Cafe, where the flavors meet the vibrant pulse of Cape Town! 
            Our restaurant is situated on the bustling Lower Main Road of Observatory"/>
        </div>
    )
}

export default HomePage;