import { Container } from "react-bootstrap";
import "../About/about.css";
import { aboutData } from "./aboutModel";
function AboutComponent() {
  const data = aboutData[0];
  return (
    <div id="about">
      <Container className="main-container">
        <div className="about-us-lebel">
          <p className="lebel">{data.titleLabel}</p>
        </div>
        <div className="about-heading-title">
          <p dangerouslySetInnerHTML={{ __html: data.headingTitle }}></p>
        </div>
        <div className="card-container">
          {data.cardElement.map((item: any, index: any) => {
            return (
              <div key={index} className="card">
                <div className="card-image">
                  <img src={item["icon"]} alt={"image " + (index + 1)} />
                </div>
                <div className="card-title">
                  <p>{item["title"]}</p>
                </div>
                <div className="card-content">
                  <p>{item["content"]}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="second-aboutus-container">
          <div className="video-container">
            <div className="video-card1"></div>
            <div className="video-card2"></div>
            <div className="video-card3"></div>
          </div>
          <div className="second-about-content-container">
            <div className="about-us-lebel">
              <p className="lebel">{data.titleLabel}</p>
            </div>
            <div className="second-heading-title">
              <p dangerouslySetInnerHTML={{ __html: data.secondHeadingTitle }}/>
            </div>
            <div className="second-sub-heading-title">
              <p>{data.secondSubHeadingTitle}</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AboutComponent;
