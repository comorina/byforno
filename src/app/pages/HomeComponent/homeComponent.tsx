import { Container } from "react-bootstrap";
import "../HomeComponent/home.css";
import { homeData } from "./homeModel";
import photo from "../../assets/images/staticImage.png";

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
        </div>
        <div className="home-image-container">
          <img src='/Users/shivampandey/Documents/Freelancing/byforno/src/app/pages/HomeComponent/homeComponent.tsx
/Users/shivampandey/Documents/Freelancing/byforno/src/app/assets/images/staticImage.png' alt="" />
        </div>
      </Container>
    </div>
  );
}

export default HomeComponent;
