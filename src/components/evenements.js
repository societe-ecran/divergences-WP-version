import React from "react";
import Evenement from "./evenement";
import moment from 'moment'

const Evenements = ({ articles }) => {

 // var dateFormat = moment(evenement.node.dateevenement.dateEvenement).format() 
 console.log(articles)
// var month = new Date(dateFormat).getMonth()
// var corectMonth=month+=1
// var date = new Date(dateFormat).getDate() + '.' + corectMonth +'.'+ JSON.stringify(new Date(dateFormat).getFullYear()).substr(2) 
 

// var dateFormat = moment(evenement.node.dateevenement.dateEvenement).format() 

  articles.sort(function (a, b) {
    var AdateFormat = moment(a.node.dateevenement.dateEvenement).format() 
    var BdateFormat = moment(b.node.dateevenement.dateEvenement).format() 
    return (
      // new Date(b.node.dateevenement.dateEvenement) -
      // new Date(a.node.dateevenement.dateEvenement)
      new Date(BdateFormat) -
      new Date(AdateFormat)
    );
  });

  return (
    <div>
      {articles.map((article, i) => {
        return (
          <div  key={i}>
            <Evenement
              evenement={article}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Evenements;
