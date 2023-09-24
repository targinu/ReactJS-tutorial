import React, { useEffect, useState } from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink";
import Form from "./form";

async function getSatellites(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = (props) => {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props.id).then((data) => {
      setSatellites(data["satellites"]);
    });
  }, []);

  
  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  let title;
  if (props.title_with_underline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;

  return (
    <div>
      {title}
      <div>
        {" "}
        <DescriptionWithLink
          description={props.description}
          link={props.link}
        />
      </div>
      <GrayImg img_url={props.img_url} gray={props.gray} />
      <h4>Satélites</h4>
      <hr></hr>
      <Form addSatellite={addSatellite}></Form>
      <hr></hr>
      <ul>
        {satellites.map((satellite, index) => (
          <li key={index}>{satellite.name}</li>
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};

export default Planet;
