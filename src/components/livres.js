import React from "react";
import Livre from "./livre";

const Livres = ({ articles }) => {
  const article = articles;

  return (
    <div>
      {article.map((livre, i) => {
        return <Livre article={livre} key={`evenement__${livre.node.name}`} />;
      })}
    </div>
  );
};

export default Livres;
