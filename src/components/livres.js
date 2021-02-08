import React from "react";
import Livre from "./livre";
// import moment from "moment";

const Livres = ({ articles }) => {
  const article = articles;


  // const livresTrie = article.sort(function (a, b) {
  //   var AdateFormat = moment(a.node.acf.date_de_parution).format();
  //   var BdateFormat = moment(b.node.acf.date_de_parution).format();

  //   return  new Date(AdateFormat) - new Date(BdateFormat);
  // });

  return (
    <div>
      {article.map((livre, i) => {
        return <Livre article={livre} key={`evenement__${livre.node.name}`} />;
      })}
    </div>
  );
};

export default Livres;
