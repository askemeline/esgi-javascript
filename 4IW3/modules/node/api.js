const randomIntFromInterval = require("./utils").randomIntFromInterval;

var getStudents = function getStudents(resolve) {
  const timeout = randomIntFromInterval(1, 2);
  console.log("getStudents:" + timeout);
  setTimeout(() => {
    resolve([
      { name: "Dupont", cours: [1, 3, 5] },
      { name: "Lea", cours: [2, 4] },
      { name: "Charles", cours: [1] },
    ]);
  }, timeout);
};

var getCourses = function getCourses(resolve) {
  const timeout = randomIntFromInterval(2, 4);
  console.log("getCourses:" + timeout);
  setTimeout(() => {
    resolve([
      { id: 1, name: "JS" },
      { id: 2, name: "PHP" },
      { id: 3, name: "C#" },
      { id: 4, name: "F#" },
      { id: 5, name: "CSS" },
    ]);
  }, timeout);
};

module.exports = {
  getStudents: getStudents,
  getCourses: getCourses,
};
