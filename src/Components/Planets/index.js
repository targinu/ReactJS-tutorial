import React, { Fragment } from "react";
import Planet from "./Planet";

const Planets = () => {
  return (
    <Fragment>
      <h3>Planet List</h3>
      <button>Clique</button>
      <hr></hr>
      <Planet
        name="Mercúrio"
        description="Mercúrio é o menor[nota 1][nota 2] e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres. A sua órbita tem a maior 
        excentricidade e o seu eixo apresenta a menor inclinação em relação ao plano da órbita dentre todos os planetas do Sistema Solar. Mercúrio completa três 
        rotações em torno de seu eixo a cada duas órbitas. O periélio da órbita de Mercúrio apresenta uma precessão de 5 600 segundos de arco por século, um fenômeno 
        completamente explicado apenas a partir do século XX pela Teoria da Relatividade Geral formulada por Albert Einstein.[2] A sua aparência é brilhante quando 
        observado da Terra,        tendo uma magnitude aparente que varia de −2,6 a 5,7, embora não seja facilmente observado pois sua separação angular do Sol é de 
        apenas 28,3º. Uma vez que Mercúrio normalmente se perde no intenso brilho solar, exceto em eclipses solares, só pode ser observado a olho nu durante o crepúsculo 
        matutino ou vespertino."
        link="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"
        img_url="https://media.istockphoto.com/id/183817880/pt/foto/mercury.jpg?s=1024x1024&w=is&k=20&c=Ie5migPD15F9REEdO7_Z7P_-cEIv7dZ3rUSPQE3zI6A="
        title_with_underline={true}
        gray={true}
      />

      <hr></hr>
      <Planet
        name="Plutão"
        description="Plutão, formalmente designado 134340 Plutão (símbolos: ⯓ e ♇) é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto 
        observado diretamente orbitando o Sol. Originalmente classificado como um planeta, Plutão é atualmente o maior membro conhecido do cinturão de Kuiper,[11] 
        uma região de corpos além da órbita de Netuno."
        link="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        img_url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Pluto_in_True_Color_-_High-Res.jpg/280px-Pluto_in_True_Color_-_High-Res.jpg"
        gray={true}
      />
    </Fragment>
  );
};

export default Planets;
