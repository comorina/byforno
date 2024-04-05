import { Container } from "react-bootstrap";
import "../HomeComponent/home.css";
import { homeData } from "./homeModel";
import photo from "../../assets/images/ByForno-animated-pi.jpg";

function HomeComponent() {
  const data = homeData[0];

  return (
    <div id="home" className="root-home">
      <Container className="home-main-container">
        <div className="home-tile-container">
          <div className="heading-title">
            <p>{data.homeHeadingTitle}</p>
          </div>
          <div className="heading-sub-title">
            <p>{data.homeSubheadingTitle}</p>
          </div>
          <div className="button-container">
            {data?.button?.map((item: any, index: any)=>{
              return(
                <button className="learn-more-container">
                  {item['buttonlabel']}
                </button>
              )
            })}
          </div>
        </div>
        <div className="home-image-container">
          <div className="image-card-container">
            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeComponent;
