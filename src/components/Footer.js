import React from "react";
import { Container, Row } from "react-bootstrap";

import "../style/Footer.scss";

function Footer() {
  return (
    <>
      <section className="footer">
        <Container>
          <Row>
            <div className="col-6 col-sm-4 p-0 d-flex flex-wrap">
              <h6 className="col-12 col-lg-6">文化活動</h6>
              <h6 className="col-12 col-lg-6">文化空間</h6>
              <h6 className="col-12 col-lg-6">資訊刊登</h6>
              <h6 className="col-12 col-lg-6">性別平等專區</h6>
            </div>
            <div className="col-6 col-sm-4 p-0 d-flex flex-wrap">
              <h6 className="col-12 col-lg-6">主題專區</h6>
              <h6 className="col-12 col-lg-6">節慶專區</h6>
              <h6 className="col-12 col-lg-6">新民專區</h6>
              <h6 className="col-12 col-lg-6">街頭藝人</h6>
            </div>
            <div className="col-4 d-flex flex-wrap">
              <div className="col-12">
                <img
                  src="https://cloud.culture.tw/frontsite/2014/images/logo_moc.png"
                  alt=""
                />
              </div>
              <div className="col-12 pl-5 pt-4 d-none d-sm-block">
                <img
                  src="https://cloud.culture.tw/frontsite/2014/images/icon/qrcode_iCulture.svg"
                  alt=""
                />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Footer;
