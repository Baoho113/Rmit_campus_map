import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import VTlist from "./VTlist";
import "./VerticalTab.css";

function VerticalTab(props) {
  const [activeTabId, setActiveTabId] = useState(0);
  const [selected, setSelected] = props.setSelectedBuilding;

  function btnClick(id, feature) {
    setActiveTabId(id);
    setSelected(feature);
    // <GeoJSONMap selected={"building 1"}/>
  }

  return (
    <Container className="tab">
      <Row>
        <Col sm="3">
          <div className="styledTab">
            <ul className="styledTabList">
              {props.data.map((features, index) => (
                <VTlist
                  key={index}
                  onClick={btnClick}
                  data={features}
                  index={index}
                  activeTabId={activeTabId}
                />
              ))}
            </ul>
          </div>
        </Col>
        {/* <Col sm="9">
          {props.data.map((features, index) => (
            <VTcontent
              data={features}
              key={index}
              index={index}
              activeTabId={activeTabId}
            />
          ))}
        </Col> */}
      </Row>
      <span
        className={
          activeTabId === 0
            ? "index1-chosen"
            : activeTabId === 1
            ? "index2-chosen"
            : "index3-chosen"
        }
      >
        &nbsp;
      </span>
    </Container>
  );
}

export default VerticalTab;
