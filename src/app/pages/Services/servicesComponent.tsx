import { Container } from "react-bootstrap";
import "../Services/services.css";
import { serviceData } from "./serviceModel";
function ServicesComponent() {
  const data = serviceData[0];
  return (
    <div id="services">
      <Container className="services-main-container">
        <div className="heading-title-container">
          <div className="service-label">{data.serviceLabelTitle}</div>
          <div className="service-heading-title">
            <p
              dangerouslySetInnerHTML={{ __html: data.serviceHeadingTitle }}
            ></p>
          </div>
          <div className="servic-subHeading-title">
            <p>{data.serviceSubHeadingTitle}</p>
          </div>
          <div className="service-button-container">
            <button className="our-works">{data.button[0]["title"]}</button>
          </div>
        </div>
        <div className="service-card-container">
          {data.cardComponent.map((item: any, index: any) => {
            return (
              <div key={index} className="service-card">
                <div className="service-card-image"></div>
                <div className="service-card-heading-title">
                  <p>{item["cardHeading"]}</p>
                </div>
                <div className="service-card-content">
                  <p>{item["cardContent"]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
export default ServicesComponent;
