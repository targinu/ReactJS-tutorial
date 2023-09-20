import React from "react";
import GrayImg from "../../shared/gray_img";
import DescriptionWithLink from "../../shared/descriptionWithLink";

const Planet = (props) => {
  const names = ["a", "b", "c", "d"];
  const satellites = names.map((n) => <li>Satélite {n}</li>);

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
      <h4>{title}</h4>
      <p>
        <DescriptionWithLink description={props.description} />
        <DescriptionWithLink link={props.link} />
      </p>
      <GrayImg img_url={props.img_url} gray={props.gray} />

      <h4>Satélites</h4>
      <ul>{satellites} </ul>
      <hr></hr>
    </div>
  );
};

export default Planet;
