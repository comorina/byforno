import { Container } from "react-bootstrap";
import "../Works/works.css";
import { worksData } from "../Works/worksModel";
import { useState } from "react";

function WorksComponent() {
  const data = worksData[0];
  const [cardType, setCardrType] = useState("ALL");
  function fileterTheElement(val: any) {
    if (cardType === "ALL" || val.type === cardType) {
        return true;
      }
      return false;
  }
  return (
    <div id="works">
      <Container className="works-main-container">
        <div className="works-label">
          <p>{data.labelTitle}</p>
        </div>
        <div className="heading-tab-section">
          <div className="works-heading-title">
            <p>{data.headingTitle}</p>
          </div>
          <div className="works-tab-section">
            <ul>
              {data.filterTab.map((item: any, index: any) => {
                return (
                  <li
                    key={index}
                    className="tab"
                    onClick={() => setCardrType(item)}
                  >
                    <p>{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="works-card-container">
          {data.cardComponent
            .filter(fileterTheElement)
            .map((card: any, id: any) => {
              return (
                <div key={id} className="works-card">
                  <div className="checking">
                    <p>{card["cardHeading"]}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
    </div>
  );
}

export default WorksComponent;
