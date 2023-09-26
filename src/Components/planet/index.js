import React, { useEffect, useState } from "react";
import GrayImg from "../shared/gray_img";
import DescriptionWithLink from "../shared/descriptionWithLink";
import Form from "./form";
import { useParams } from "react-router-dom";

async function getPlanet(id) {
  let response = await fetch(`http://localhost:3000/api/${id}.json`);
  let data = await response.json();
  return data;
}

const Planet = () => {
  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getPlanet(id).then((data) => {
      setSatellites(data["satellites"]);
      setPlanet(data["data"]);
    });
  }, []);

  const addSatellite = (new_satellite) => {
    setSatellites([...satellites, new_satellite]);
  };

  let title;
  if (planet.title_with_underline)
    title = (
      <h4>
        <u>{planet.name}</u>
      </h4>
    );
  else title = <h4>{planet.name}</h4>;

  return (
    <div>
      {title}
      <div>
        {" "}
        <DescriptionWithLink
          description={planet.description}
          link={planet.link}
        />
      </div>
      <GrayImg img_url={planet.img_url} gray={planet.gray} />
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
