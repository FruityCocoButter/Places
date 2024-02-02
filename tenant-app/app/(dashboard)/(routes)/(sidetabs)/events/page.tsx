import AttractionBanner from "../../../_components/attraction-banner";
import PropertyBanner from "../../../_components/property-banner";
import CommentCard from "../../../_components/comment-card";
import LandlordComment from "../../../_components/landlord-comment";

const EventsPage = () => {
  return(
    <div className="fixed inset-x-96 inset-y-56">
      <AttractionBanner 
          imageSrc="/obs cafe 1.png" 
          attractionName="Obs Cafe" 
          rating={4.5} 
          attractionDesc="Italian Restaurant
          Welcome to Obz Cafe, where the flavors meet the vibrant pulse of Cape Town! 
          Our restaurant is situated on the bustling Lower Main Road of Observatory"
      />
      <PropertyBanner
      imageSrc="/mansion4.png"
      propertyAddress="12 Candycane Blvd"
      propertyDesc="Magnificant ocean views overlooked by Purgatory Hill. 
      Offers home theatre seating 20 guests, indoor gym and a private massage studio."/>
      <LandlordComment/>
    </div>
  );
}

export default EventsPage;

