import AttractionCard from "../../../_components/attraction-card";

const AttractionsPage = () => {
  return(
      <div className="fixed inset-x-[30rem] inset-y-56 h-screen w-1/2">
        <div className="flex flex-row">
              <AttractionCard images={["/armchair theatre 1.png", "/city rock 1.png", "/obs cafe 1.png"]} href="attractions/1/notices"/>
              <AttractionCard images={["/obs cafe 1.png" ,"/armchair theatre 1.png", "/city rock 1.png"]} href="attractions/2/notices"/>
          </div>
          <div className="flex flex-row">
            <AttractionCard images={[ "/city rock 1.png", "/obs cafe 1.png", "/armchair theatre 1.png"]} href="attractions/3/notices"/>
            <AttractionCard images={["/armchair theatre 1.png", "/city rock 1.png", "/obs cafe 1.png"]} href="attractions/4/notices"/>
          </div>
      </div>
  );
}

export default AttractionsPage;

