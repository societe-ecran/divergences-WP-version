import React from "react";
import Evenement from "./evenement";

const Evenements = ({ articles }) => {
  articles.sort(function (a, b) {
    return (
      new Date(b.node.dateevenement.dateEvenement) -
      new Date(a.node.dateevenement.dateEvenement)
    );
  });

  return (
    <div>
      {articles.map((article, i) => {
        return (
          <div>
            <Evenement
              evenement={article}
              key={`evenements__${article.node.slug}`}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Evenements;
