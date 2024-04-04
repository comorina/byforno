import { Col, Container, Row } from "react-bootstrap";
import "../Footer/footer.css";
function FooterComponent() {
  return (
    <div id="contactus" style={{ height: "80%", border: "1px solid white" }}>
      <Container style={{ marginTop: "10%" }}>
        <Row>
          <Col md={3} sm={6} xs={12} style={{ marginTop: "20px" }}>
            <div className="heading">Main Navigation</div>
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#about">About</a>
            </div>
            <div>
              <a href="#services">Services</a>
            </div>
            <div>
              <a href="#works">Works</a>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} style={{ marginTop: "20px" }}>
            <div className="heading">Design & Development</div>
            <div>
              <a href="">Web Design</a>
            </div>
            <div>
              <a href="">E-Commerce</a>
            </div>
            <div>
              <a href="">UI/UX design</a>
            </div>
            <div>
              <a href="">Dashboard & Tool</a>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} style={{ marginTop: "20px" }}>
            <div className="heading">Power API & Integrations</div>
            <div>
              <a href="">Ready-to-Use-APIs for GST</a>
            </div>
            <div>
              <a href="">Trademark Status</a>
            </div>
            <div>
              <a href="">Custom APIs</a>
            </div>
            <div>
              <a href="">CIN Information</a>
            </div>
          </Col>
          <Col md={3} sm={6} xs={12} style={{ marginTop: "20px" }}>
            <div className="heading">Get In Touch</div>
            <div>
              <a href="">Call us:</a>
            </div>
            <div>
              <a href="">+91-9876543210</a>
            </div>
            <div>
              <a href="">Mail us:</a>
            </div>
            <div>
              <a href="">example@gmail.com</a>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: "80px" }}>
          <Col
            md={1}
            sm={3}
            xs={3}
            style={{
              border: "1px solid white",
              height: "50px",
              color: "whitesmoke",
              fontWeight: "600",
              fontSize: "20px",
              display: "flex",
              alignItems: "center",
              borderStyle: "dashed",
            }}
          >
            ByForno
          </Col>
          <Col
            md={5}
            sm={5}
            xs={5}
            style={{
              height: "50px",
              color: "whitesmoke",
              display: "flex",
              alignItems: "center",
            }}
          >
            Copyright 2024&nbsp;
            <span style={{ color: "red", fontWeight: "600" }}>
              ByForno.&nbsp;&nbsp;
            </span>
            All Rights Reserved.
          </Col>
          <Col
            md={2}
            sm={4}
            xs={4}
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <div className="social-media">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <a href="" className="bi bi-instagram" style={{ color: "white", fontSize: '18px' }}></a>
              </div>
            </div>
            <div className="social-media">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <a href="" className="bi bi-facebook" style={{ color: "white", fontSize: '18px' }}></a>
              </div>
            </div>
            <div className="social-media">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <a href="" className="bi bi-whatsapp" style={{ color: "white", fontSize: '18px' }}></a>
              </div>
            </div>
            <div className="social-media">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "fit-content",
                  height: "fit-content",
                }}
              >
                <a href="" className="bi bi-github" style={{ color: "white", fontSize: '18px' }}></a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default FooterComponent;
