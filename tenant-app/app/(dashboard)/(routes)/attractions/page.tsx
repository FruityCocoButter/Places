import AttractionCard from "../../_components/attraction-card";

const AttractionsPage = () => {
  return(
      <div className="fixed inset-x-96 inset-y-16 h-screen w-1/2">
        <AttractionCard images={["/armchair theatre 1.png", "/city rock 1.png", "/obs cafe 1.png"]}/>
      </div>
  );
}

export default AttractionsPage;

