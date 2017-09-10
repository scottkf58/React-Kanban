export const getCardsFromDB = (card) => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      resolve(this.responseText);
    });
    oReq.open("GET", "/cards");
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(card));
  });
};

export const addCardsToDB = (card) => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      resolve(this.responseText);
    });
    oReq.open("POST", "/cards");
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(card));
  });
};


export function getCards () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve ({
        cards: [{
          id: "1",
          title: "small",
          priority: "Low",
          createdBy: "mcd",
          assignedTo: "Scott",
          status: "progress"
        }, {
          id: "2",
          title: "medium",
          priority: "Blocker",
          createdBy: "tacobell",
          assignedTo: "Scott",
          status: "done"
        }, {
          id: "3",
          title: "large",
          priority: "High",
          createdBy: "jacks",
          assignedTo: "Scott",
          status: "queue"
        }
      ]
      });
    }, 1000);
  });
}


export default getCards;