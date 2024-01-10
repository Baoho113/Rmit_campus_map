import React from "react";

import "./VTlist.css";
import GeoJSONMap from "../GeoJSONMap";

function VTlist(props) {
  const Clicked = () => {
    props.onClick(props.index);
    // const setBuilding = props.data.properties.name;
    // <GeoJSONMap selected={setBuilding}/>
  };

  return (
    <li key={props.index} style={{ listStyle: "none", textAlign: "left", bottom: 500 }}>
      <button
        className="buttonBuilding"
        onClick={Clicked}
        style={
          props.activeTabId === props.index
            ? { color: "#CE3030" }
            : { color: "#8892b0" }
        }
      >
        {props.data.properties.name}
      </button>
    </li>
    
  );
}

export default VTlist;
