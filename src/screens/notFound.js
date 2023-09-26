import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
  return (
    <div>
      <h3>Pagina não encontrada</h3>
      <Link to="/">Voltar a listagem</Link>
    </div>
  );
};

export default NotFoundScreen;
